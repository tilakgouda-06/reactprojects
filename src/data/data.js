// src/data/data.js

export const NAV_LINKS = ["Home","About","Services","Portfolio","Help","Contact"];

export const DISHES = [
  { name:"Saffron Lobster Bisque", desc:"House-smoked cream, micro herbs, caviar pearls", tag:"Chef's Signature", img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&q=95&fit=crop" },
  { name:"Wagyu Tenderloin A5", desc:"Truffle jus, pomme purée, seasonal greens", tag:"Most Loved", img:"https://images.unsplash.com/photo-1558030006-450675393462?w=900&q=95&fit=crop" },
  { name:"Black Truffle Risotto", desc:"Aged parmesan, wild mushrooms, gold leaf", tag:"Vegetarian", img:"https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=95&fit=crop" },
  { name:"Miso Glazed Sea Bass", desc:"Dashi broth, pickled radish, yuzu foam", tag:"Seasonal", img:"https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=900&q=95&fit=crop" },
];

export const USPS = [
  { icon:"🌿", title:"Farm-to-Table Ingredients", desc:"Every ingredient is sourced fresh daily from certified organic farms and local artisan producers." },
  { icon:"🏆", title:"Award-Winning Chefs", desc:"Our team holds 3 Michelin stars and has been recognized by the World's 50 Best Restaurants." },
  { icon:"✨", title:"Unmatched Ambience", desc:"Every corner of Maharaja's Feast is designed to transport you — from the lighting to the table linens." },
  { icon:"🍷", title:"Curated Wine Cellar", desc:"Over 800 labels selected by our resident sommelier from the finest vineyards worldwide." },
];

export const TESTIMONIALS = [
  { name:"Priya Mehta", role:"Food Critic, Condé Nast", quote:"Maharaja's Feast doesn't just serve food — it orchestrates an entire sensory performance. A transcendent evening every single time.", stars:5 },
  { name:"James Whitfield", role:"CEO, Whitfield Group", quote:"We've hosted board dinners at Maharaja's Feast for three years. The consistency of excellence is simply unmatched anywhere in the city.", stars:5 },
  { name:"Aisha Kapoor", role:"Travel Blogger", quote:"If I could only eat at one restaurant for the rest of my life, it would be Maharaja's Feast. Bold claim — absolutely meant.", stars:5 },
];

export const SERVICES = [
  { icon:"🍽️", title:"Fine Dining Experience", desc:"An intimate à la carte journey through seasonal tasting menus, crafted fresh each evening by Chef Laurent and his brigade." },
  { icon:"🥂", title:"Private Events & Dining", desc:"Exclusive private rooms for up to 40 guests. Perfect for anniversaries, proposals, corporate celebrations, and bespoke occasions." },
  { icon:"🚐", title:"Luxury Catering", desc:"Bring the Maharaja's Feast experience to your venue. Our catering team delivers the same Michelin-starred quality, wherever you are." },
  { icon:"📅", title:"Online Reservations", desc:"Secure your table instantly via our seamless booking system. Personalise your visit with dietary notes and special requests." },
];

export const PORTFOLIO_ITEMS = [
  { category:"Food",     img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=95&fit=crop", title:"Wagyu Elegance" },
  { category:"Interior", img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=95&fit=crop", title:"The Main Hall" },
  { category:"Food",     img:"https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=95&fit=crop", title:"Dessert Architecture" },
  { category:"Events",   img:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=95&fit=crop", title:"Private Gala Evening" },
  { category:"Interior", img:"https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=95&fit=crop", title:"Wine Cellar" },
  { category:"Food",     img:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=95&fit=crop", title:"Garden Harvest" },
  { category:"Events",   img:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=95&fit=crop", title:"Corporate Dinner" },
  { category:"Interior", img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=95&fit=crop", title:"The Lounge Bar" },
  { category:"Food",     img:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=95&fit=crop", title:"Seasonal Plating" },
];

export const TIMELINE = [
  { year:"2008", title:"The Beginning",       desc:"Chef Laurent Moreau opens Maharaja's Feast as a 30-seat bistro in South Mumbai with a single vision: honest luxury." },
  { year:"2012", title:"First Michelin Star",  desc:"Four years of relentless refinement earns Maharaja's Feast its first Michelin star — the first in Maharashtra." },
  { year:"2017", title:"The Grand Expansion", desc:"A full renovation transforms the restaurant into a 120-seat temple of fine dining, with a private event wing." },
  { year:"2022", title:"Third Star Awarded",  desc:"Maharaja's Feast joins a rarefied group of three-star establishments in Asia, cementing its global reputation." },
];

export const FAQS = [
  {
    question: "How do I make a reservation?",
    answer: "You can make a reservation by calling us at +91 22 4001 9999, emailing reserve@maharajasfeast.in, or using our online booking system on the Contact page."
  },
  {
    question: "What is the dress code?",
    answer: "We require smart casual attire. Gentlemen are encouraged to wear jackets, and ladies should wear elegant dresses or suits. No jeans, shorts, or sneakers please."
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have an extensive vegetarian menu featuring seasonal vegetables, artisanal cheeses, and plant-based creations that rival our meat dishes in sophistication."
  },
  {
    question: "What are your opening hours?",
    answer: "We are open Tuesday through Sunday from 6:00 PM to 11:00 PM. We are closed on Mondays for staff rest and preparation."
  },
  {
    question: "Can I cancel or modify my reservation?",
    answer: "Reservations can be modified or cancelled up to 24 hours in advance. Please contact us directly to make changes."
  },
  {
    question: "Do you accept credit cards?",
    answer: "We accept all major credit cards, debit cards, and digital payment methods. We do not accept cash payments over ₹50,000."
  },
  {
    question: "Is parking available?",
    answer: "Valet parking is available at the entrance. Our team will take care of your vehicle while you enjoy your meal."
  },
  {
    question: "Do you offer private dining?",
    answer: "Yes, we have three private dining rooms available for groups of 8-40 guests. These can be booked for special occasions and corporate events."
  },
  {
    question: "What is the average price per person?",
    answer: "Our tasting menu starts at ₹12,000 per person, with à la carte options ranging from ₹8,000 to ₹25,000 per person, excluding beverages and service charge."
  },
  {
    question: "Can I bring my own wine?",
    answer: "We have a comprehensive wine cellar, but we do allow BYO with a ₹5,000 corkage fee per bottle. Please inform us in advance."
  }
];