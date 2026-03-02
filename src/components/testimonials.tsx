"use client";

import Image from "next/image";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    designation: "Freelance Designer",
    testimonial:
      "I never tracked expenses before because it was too tedious. With FinBot, " +
      "I just type what I spent and it's done. Saved $400 in my first month!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    image: "/images/testimonial.jpg",
  },
  {
    id: 2,
    name: "Marcus R.",
    designation: "Software Engineer",
    testimonial:
      "The budget alerts are a game-changer. FinBot warned me I was " +
      "overspending on dining out, gently and without judgment. That's exactly what I needed.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    image: "/images/testimonial.jpg",
  },
  {
    id: 3,
    name: "Jessica L.",
    designation: "Marketing Manager",
    testimonial:
      "I set a savings goal for a vacation and FinBot kept me motivated " +
      "every step of the way. Hit my target two weeks early!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    image: "/images/testimonial.jpg",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-semibold text-4xl tracking-tight font-serif sm:text-5xl">
          Loved by People Who Love Their Money
        </h2>
        <p className="mt-3 text-center text-muted-foreground text-lg">
          Join thousands already taking control of their finances.
        </p>
        <div className="mt-14 w-full">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                className={cn("h-3.5 w-3.5 rounded-full border-2", {
                  "border-primary bg-primary": current === index + 1,
                })}
                key={index}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className="mb-8 rounded-xl bg-accent px-6 py-8 sm:py-6">
    <div className="flex items-center justify-between gap-20">
      <div className="relative hidden aspect-3/4 w-full max-w-[18rem] shrink-0 rounded-xl overflow-hidden lg:block">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-1/4 right-0 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-primary">
          <svg
            className="h-6 w-6"
            fill="none"
            height="102"
            viewBox="0 0 102 102"
            width="102"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-primary-foreground"
              d="M26.0063 19.8917C30.0826 19.8625 33.7081 20.9066 36.8826 23.024C40.057 25.1414 42.5746 28.0279 44.4353 31.6835C46.2959 35.339 47.2423 39.4088 47.2744 43.8927C47.327 51.2301 44.9837 58.4318 40.2444 65.4978C35.4039 72.6664 28.5671 78.5755 19.734 83.2249L2.54766 74.1759C8.33598 71.2808 13.2548 67.9334 17.3041 64.1335C21.2515 60.3344 23.9203 55.8821 25.3105 50.7765C20.5179 50.4031 16.6348 48.9532 13.6612 46.4267C10.5864 44.0028 9.03329 40.5999 9.00188 36.2178C8.97047 31.8358 10.5227 28.0029 13.6584 24.7192C16.693 21.5381 20.809 19.9289 26.0063 19.8917ZM77.0623 19.5257C81.1387 19.4965 84.7641 20.5406 87.9386 22.6581C91.1131 24.7755 93.6306 27.662 95.4913 31.3175C97.3519 34.9731 98.2983 39.0428 98.3304 43.5268C98.383 50.8642 96.0397 58.0659 91.3004 65.1319C86.4599 72.3005 79.6231 78.2095 70.79 82.859L53.6037 73.8099C59.392 70.9149 64.3108 67.5674 68.3601 63.7676C72.3075 59.9685 74.9763 55.5161 76.3665 50.4105C71.5739 50.0372 67.6908 48.5873 64.7172 46.0608C61.6424 43.6369 60.0893 40.2339 60.0579 35.8519C60.0265 31.4698 61.5787 27.6369 64.7145 24.3532C67.7491 21.1722 71.865 19.563 77.0623 19.5257Z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between gap-1">
          <div className="hidden items-center gap-4 sm:flex md:hidden">
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-lg">{testimonial.name}</p>
              <p className="text-muted-foreground text-sm">{testimonial.designation}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
            <StarIcon className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
            <StarIcon className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
            <StarIcon className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
            <StarIcon className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
          </div>
        </div>
        <p className="mt-6 font-semibold text-lg leading-normal tracking-tight sm:text-2xl lg:text-[1.75rem] lg:leading-normal! xl:text-3xl">
          &ldquo;{testimonial.testimonial}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-4 sm:hidden md:flex">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-primary font-medium text-primary-foreground text-xl">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-lg">{testimonial.name}</p>
            <p className="text-muted-foreground text-sm">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
