import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  arrivalDate: z.string().min(1, "Please select an arrival date"),
  roomType: z.string().min(1, "Please select a room type"),
  message: z.string().min(10, "Please tell us more about your enquiry"),
});
type EnquiryForm = z.infer<typeof enquirySchema>;

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<EnquiryForm>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", email: "", arrivalDate: "", roomType: "", message: "" },
  });

  function onSubmit(_values: EnquiryForm) {
    toast({
      title: "Enquiry Sent",
      description: "Your personal concierge will be in touch within 2 hours."
    });
    form.reset();
  }

  return (
    <div className="lg:col-span-3 glass rounded-2xl p-7 md:p-10 shadow-sm">
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-7">Send an Enquiry</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="bg-white/60 border-border/60 focus:border-primary/60"
                      data-testid="input-name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      className="bg-white/60 border-border/60 focus:border-primary/60"
                      data-testid="input-email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="arrivalDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Arrival Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="bg-white/60 border-border/60 focus:border-primary/60 h-10 [color-scheme:light]"
                      data-testid="input-arrival-date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roomType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Room Interest</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/60 border-border/60" data-testid="select-room-type">
                        <SelectValue placeholder="Select a villa type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="overwater">Overwater Villa</SelectItem>
                      <SelectItem value="ocean-suite">Ocean Suite</SelectItem>
                      <SelectItem value="garden">Garden Pool Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse Residence</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Your Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your dream stay — special occasions, dietary preferences, arrival times, special requests..."
                    className="bg-white/60 border-border/60 focus:border-primary/60 resize-none"
                    data-testid="textarea-message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-xs uppercase tracking-widest rounded-xl"
            data-testid="button-send-enquiry"
          >
            Send Enquiry
          </Button>
        </form>
      </Form>
    </div>
  );
}
