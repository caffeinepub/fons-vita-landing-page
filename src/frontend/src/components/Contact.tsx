import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Mail, Globe, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useSubmitContactForm } from '../hooks/useQueries';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const submitMutation = useSubmitContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitMutation.mutateAsync(formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get in <span className="text-steel-500">Touch</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-steel-500 to-transparent" />
          <p className="text-xl text-muted-foreground mt-4">
            Let's discuss how we can help your business grow
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-2 hover:border-steel-500 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-steel-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-steel-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your Company Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-steel-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-2 focus:border-steel-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitMutation.isPending}
                  className="w-full bg-steel-500 hover:bg-steel-600 text-white font-semibold"
                >
                  {submitMutation.isPending ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 hover:border-steel-500 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steel-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-steel-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Kavaja, Albania<br />
                      Serving clients globally
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steel-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-steel-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:info@fonsvita.com"
                      className="text-muted-foreground hover:text-steel-500 transition-colors"
                    >
                      info@fonsvita.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steel-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-steel-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Website</h3>
                    <a 
                      href="https://www.fonsvita.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-steel-500 transition-colors"
                    >
                      www.fonsvita.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-steel-500/5 to-blue-500/5 hover:border-steel-500 transition-colors duration-300">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg text-card-foreground mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
