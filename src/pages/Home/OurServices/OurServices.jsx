import React from "react";
import ServiceCard from "./ServiceCard.jsx";

// React Icons (you can change these anytime)
import { FaTruckFast } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiCargoCrate } from "react-icons/gi";
import { TbArrowBackUp } from "react-icons/tb";

export default function OurServices() {
  const services = [
    {
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: FaTruckFast,
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: MdLocalShipping,
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
      icon: FaWarehouse,
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: RiMoneyDollarCircleFill,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
      icon: GiCargoCrate,
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: TbArrowBackUp,
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-primary">Services</span>
        </h2>

        <p className="max-w-3xl mx-auto text-base-content/70 mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx}
            service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
