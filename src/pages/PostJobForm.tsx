import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Bot, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Header from '@/components/header';
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  jobTitle: z.string().min(3, { message: 'Job title must be at least 3 characters' }),
  company: z.string().min(2, { message: 'Company name is required' }),
  location: z.string().min(2, { message: 'Location is required' }),
  isRemote: z.boolean().default(false),
  jobType: z.string(),
  experienceLevel: z.string(),
  employmentType: z.string(),
  salaryMin: z.string(),
  salaryMax: z.string(),
  description: z.string().min(50, { message: 'Job description must be at least 50 characters' }),
  responsibilities: z.string(),
  requirements: z.string(),
  benefits: z.string(),
});

const PostJobForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: '',
      company: 'Tech Company Inc.',
      location: '',
      isRemote: false,
      jobType: 'full-time',
      experienceLevel: 'mid',
      employmentType: 'permanent',
      salaryMin: '',
      salaryMax: '',
      description: '',
      responsibilities: '',
      requirements: '',
      benefits: '',
    },
  });
  
  const nextStep = () => {
    if (currentStep === 1) {
      const jobTitleValue = form.getValues('jobTitle');
      const companyValue = form.getValues('company');
      const locationValue = form.getValues('location');
      
      if (!jobTitleValue || !companyValue || !locationValue) {
        toast.error('Please fill in all required fields');
        form.trigger(['jobTitle', 'company', 'location']);
        return;
      }
    }
    
    if (currentStep === 2) {
      const descriptionValue = form.getValues('description');
      if (!descriptionValue || descriptionValue.length < 50) {
        toast.error('Please provide a detailed job description');
        form.trigger(['description']);
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', values);
    toast.success('Job posted successfully!');
    // In a real app, you would send this to an API
  };
  
  const generateAiSuggestion = (field: keyof z.infer<typeof formSchema>) => {
    setShowAiSuggestions(true);
    
    // Simulate AI suggestions based on job title
    const jobTitle = form.getValues('jobTitle');
    
    setTimeout(() => {
      let suggestion = '';
      
      switch (field) {
        case 'description':
          suggestion = `We are seeking a talented ${jobTitle} to join our team. As a ${jobTitle}, you will be responsible for designing, developing, and implementing solutions that drive our business forward.`;
          break;
        case 'responsibilities':
          suggestion = `• Design and implement new features and functionality\n• Write clean, maintainable code\n• Collaborate with cross-functional teams\n• Troubleshoot and debug issues\n• Stay up-to-date with industry trends and best practices`;
          break;
        case 'requirements':
          suggestion = `• Bachelor's degree in Computer Science or related field\n• 3+ years of experience in a similar role\n• Strong problem-solving skills\n• Excellent communication and teamwork abilities\n• Experience with relevant technologies and tools`;
          break;
        case 'benefits':
          suggestion = `• Competitive salary and bonus structure\n• Comprehensive health, dental, and vision insurance\n• 401(k) matching program\n• Flexible work arrangements\n• Professional development opportunities\n• Collaborative and innovative work environment`;
          break;
        default:
          suggestion = '';
      }
      
      form.setValue(field, suggestion);
      setShowAiSuggestions(false);
      toast.success('AI suggestion applied!');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <div className="container mx-auto pt-24 px-4 max-w-3xl">
        <h1 className="text-3xl font-bold mt-6 mb-2">Post a New Job</h1>
        <p className="text-gray-500 mb-8">Create an effective job posting with our AI assistance</p>
        
        <div className="mb-8">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= 1 ? 'bg-hireai-blue text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              1
            </div>
            <div className={`flex-1 h-1 mx-2 ${
              currentStep >= 2 ? 'bg-hireai-blue' : 'bg-gray-200'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= 2 ? 'bg-hireai-blue text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              2
            </div>
            <div className={`flex-1 h-1 mx-2 ${
              currentStep >= 3 ? 'bg-hireai-blue' : 'bg-gray-200'
            }`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentStep >= 3 ? 'bg-hireai-blue text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs">Basic Info</span>
            <span className="text-xs">Job Description</span>
            <span className="text-xs">Review & Post</span>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Basic Job Information</h2>
                
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Senior Frontend Developer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location*</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. San Francisco, CA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="isRemote"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-end space-x-3 space-y-0 py-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>This is a remote position</FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="employmentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Employment Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select employment type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="permanent">Permanent</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="temp">Temporary</SelectItem>
                              <SelectItem value="intern">Internship</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="jobType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select job type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="full-time">Full-time</SelectItem>
                              <SelectItem value="part-time">Part-time</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="freelance">Freelance</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="experienceLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Level</FormLabel>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-wrap gap-4"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="entry" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Entry Level</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="mid" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Mid Level</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="senior" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Senior Level</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="executive" />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">Executive</FormLabel>
                          </FormItem>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="salaryMin"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Salary Range (Min)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 80000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="salaryMax"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Salary Range (Max)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="e.g. 120000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end mt-6">
                  <Button type="button" onClick={nextStep}>
                    Next Step
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            )}
            
            {/* Step 2: Job Description */}
            {currentStep === 2 && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                
                <div className="bg-hireai-light-blue p-4 rounded-lg mb-6 flex items-center">
                  <Bot className="h-5 w-5 text-hireai-blue mr-3" />
                  <div>
                    <p className="text-sm">Our AI can help you write a compelling job description. Click the magic wand to generate suggestions.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel>Job Overview*</FormLabel>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-hireai-blue"
                            onClick={() => generateAiSuggestion('description')}
                          >
                            <Sparkles className="h-4 w-4 mr-1" />
                            AI Suggest
                          </Button>
                        </div>
                        <FormControl>
                          <Textarea
                            placeholder="Provide an overview of the role..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Give a general overview of the position and your company
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="responsibilities"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel>Responsibilities</FormLabel>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-hireai-blue"
                            onClick={() => generateAiSuggestion('responsibilities')}
                          >
                            <Sparkles className="h-4 w-4 mr-1" />
                            AI Suggest
                          </Button>
                        </div>
                        <FormControl>
                          <Textarea
                            placeholder="List the key responsibilities..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Use bullet points for better readability
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel>Requirements</FormLabel>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-hireai-blue"
                            onClick={() => generateAiSuggestion('requirements')}
                          >
                            <Sparkles className="h-4 w-4 mr-1" />
                            AI Suggest
                          </Button>
                        </div>
                        <FormControl>
                          <Textarea
                            placeholder="List the requirements..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="benefits"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex justify-between items-center">
                          <FormLabel>Benefits</FormLabel>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-hireai-blue"
                            onClick={() => generateAiSuggestion('benefits')}
                          >
                            <Sparkles className="h-4 w-4 mr-1" />
                            AI Suggest
                          </Button>
                        </div>
                        <FormControl>
                          <Textarea
                            placeholder="List the benefits..."
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button type="button" onClick={nextStep}>
                    Next Step
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {showAiSuggestions && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md text-center">
                      <div className="mb-4 flex justify-center">
                        <Sparkles className="h-10 w-10 text-hireai-purple animate-pulse" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">AI is generating suggestions</h3>
                      <p className="text-gray-600 mb-4">
                        Our AI is analyzing your job details to create relevant content...
                      </p>
                      <div className="flex justify-center">
                        <div className="w-8 h-8 border-4 border-t-hireai-blue border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            )}
            
            {/* Step 3: Review & Post */}
            {currentStep === 3 && (
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Review & Post</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-6 mb-6">
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <h3 className="text-xl font-medium">{form.getValues('jobTitle')}</h3>
                        <p className="text-gray-600">{form.getValues('company')}</p>
                        <div className="flex items-center text-gray-500 mt-1">
                          <span>{form.getValues('location')}</span>
                          {form.getValues('isRemote') && (
                            <Badge variant="outline" className="ml-2 bg-hireai-light-blue text-hireai-blue border-0">
                              Remote
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <div className="text-lg font-medium">${form.getValues('salaryMin')} - ${form.getValues('salaryMax')}</div>
                        <div className="text-sm text-gray-500">{form.getValues('jobType')}</div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Tabs defaultValue="description">
                        <TabsList>
                          <TabsTrigger value="description">Overview</TabsTrigger>
                          <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                          <TabsTrigger value="requirements">Requirements</TabsTrigger>
                          <TabsTrigger value="benefits">Benefits</TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className="mt-4">
                          <div className="whitespace-pre-line text-gray-700">
                            {form.getValues('description')}
                          </div>
                        </TabsContent>
                        <TabsContent value="responsibilities" className="mt-4">
                          <div className="whitespace-pre-line text-gray-700">
                            {form.getValues('responsibilities')}
                          </div>
                        </TabsContent>
                        <TabsContent value="requirements" className="mt-4">
                          <div className="whitespace-pre-line text-gray-700">
                            {form.getValues('requirements')}
                          </div>
                        </TabsContent>
                        <TabsContent value="benefits" className="mt-4">
                          <div className="whitespace-pre-line text-gray-700">
                            {form.getValues('benefits')}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                  
                  <div className="bg-hireai-light-blue p-4 rounded-lg">
                    <div className="flex items-start">
                      <Bot className="h-5 w-5 text-hireai-blue mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-hireai-blue">AI Feedback</h3>
                        <p className="text-sm mt-1">
                          Your job posting is well-structured and detailed. Consider adding more specific technical requirements to attract more qualified candidates.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-3">Job Post Settings</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Checkbox id="screening-questions" />
                        <Label htmlFor="screening-questions" className="ml-2">
                          Add screening questions
                        </Label>
                      </div>
                      
                      <div className="flex items-center">
                        <Checkbox id="featured-job" />
                        <Label htmlFor="featured-job" className="ml-2">
                          Feature this job (additional $99)
                        </Label>
                      </div>
                      
                      <div className="flex items-center">
                        <Checkbox id="confidential" />
                        <Label htmlFor="confidential" className="ml-2">
                          Hide company name (confidential listing)
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button type="submit" className="bg-hireai-blue hover:bg-blue-700">
                    Post Job Now
                  </Button>
                </div>
              </Card>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PostJobForm;
