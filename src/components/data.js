import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.facebook.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.squarespace.com",
    icon: "fab fa-squarespace",
  },
];

export const Benefits = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 4,
    icon: "fa-sharp fa-solid fa-binoculars",
    title: "Best scene",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "March 26th, 2023",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    duration: "6 Days",
    cost: "from Rs.56000",
  },
  {
    id: 2,
    img: tour2,
    date: "April 1st, 2023",
    title: "Best of java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    duration: "11 Days",
    cost: "from Rs.49000",
  },
  {
    id: 3,
    img: tour3,
    date: "september 15, 2023",
    title: "Hong kong night",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    duration: "8 Days",
    cost: "from Rs.99000",
  },
  {
    id: 4,
    img: tour4,
    date: "december 15, 2023",
    title: "kenya height",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    duration: "20 Days",
    cost: "from Rs.79000",
  },
];
