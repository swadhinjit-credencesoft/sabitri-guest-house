"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  checkIn: z.string().min(1),
  checkOut: z.string().min(1),
  guests: z.string().min(1),
  roomType: z.string().min(1),
});
type BookingForm = z.infer<typeof bookingSchema>;

export function BookingWidget() {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { checkIn: "", checkOut: "", guests: "", roomType: "" },
  });

  function onBook(_values: BookingForm) {
    toast({
      title: "Reservation Request Received",
      description: "Your personal concierge will confirm within 2 hours."
    });
    setBookingSubmitted(true);
    setTimeout(() => setBookingSubmitted(false), 4000);
    form.reset();
  }

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 md:p-8 shadow-xl border border-white/80"
        >
          <p className="text-xs uppercase tracking-widest text-primary/80 mb-4 font-medium">Check Availability</p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onBook)}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3 md:gap-4"
            >
              {[
                { name: "checkIn" as const, label: "Check In", type: "date" },
                { name: "checkOut" as const, label: "Check Out", type: "date" },
              ].map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: f }) => (
                    <FormItem className="xl:col-span-1">
                      <FormControl>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
                            {field.label}
                          </label>
                          <Input
                            type={field.type}
                            className="bg-white border-border/60 focus:border-primary h-10 [color-scheme:light] [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                            data-testid={`input-${field.name}`}
                            {...f}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}

              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem className="xl:col-span-1">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Guests</label>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-border/60 h-10" data-testid="select-guests">
                            <SelectValue placeholder="Guests" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"].map((g, i) => (
                            <SelectItem key={i} value={String(i + 1)}>{g}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem className="xl:col-span-1">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground/70">Room Type</label>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white border-border/60 h-10" data-testid="select-room-type">
                            <SelectValue placeholder="Room Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="standard-non-ac">Standard Non-AC Room</SelectItem>
                          <SelectItem value="standard-ac">Standard AC Room</SelectItem>
                          <SelectItem value="deluxe-ac">Deluxe AC Room</SelectItem>
                          <SelectItem value="family-room">Family Room</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </FormItem>
                )}
              />

              <div className="sm:col-span-2 xl:col-span-1 flex flex-col gap-1">
                <span className="text-[10px] invisible hidden xl:block leading-none" aria-hidden="true">_</span>
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest text-xs rounded-xl w-full h-10"
                  data-testid="button-book-now"
                >
                  {bookingSubmitted ? "Confirmed ✓" : "Book Now"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
