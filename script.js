document.addEventListener('DOMContentLoaded', function () {
  const services = [
  {
    title: "Real Estate Lead Generation",
    description: "The most essential part of promoting a real estate asset is generating leads that convert into business. Through targeted strategies, we help you identify and capture high-quality prospects who are genuinely interested in your property listings, thus driving more potential clients to your real estate business.",
    imgUrl: "relg.png"
  },
  {
    title: "Google Ads",
    description: "Google Ads is a powerful platform that allows businesses to increase their online visibility and drive highly targeted traffic to their websites. We specialize in creating and managing Google Ads campaigns that are designed to help you reach your ideal audience and ensure maximum return on investment (ROI) through strategic bidding and ad placement.",
    imgUrl: "gads.jpg"
  },
  {
    title: "SEO",
    description: "Search Engine Optimisation (SEO) is a crucial aspect of online marketing that focuses on making your landing page or website visible on popular search engines like Google. By carefully optimizing the content, keywords, and structure of your website, we help you increase organic traffic, improve search rankings, and enhance your overall online presence.",
    imgUrl: "seo.jpg"
  },
  {
    title: "Digital Marketing",
    description: "Digital marketing, also known as online marketing, refers to the promotion of brands and products to connect with potential customers over the internet. Our digital marketing services include a range of strategies such as content creation, social media marketing, paid advertisements, and email marketing to help you build a stronger brand presence, drive customer engagement, and ultimately increase sales and conversions.",
    imgUrl: "digi.png"
  },
  {
    title: "Social Media Marketing",
    description: "Social media marketing leverages platforms like Facebook, Instagram, Twitter, and LinkedIn to promote your product or service and build relationships with potential customers. We design and implement customized social media strategies tailored to your brand, aimed at increasing visibility, engaging with your audience, and boosting your online presence across these platforms.",
    imgUrl: "smm.png"
  },
  {
    title: "Website Development",
    description: "Our website development services offer tailored solutions to meet your specific business needs. We specialize in creating dynamic, user-friendly, and scalable websites that not only enhance the overall user experience but also streamline business operations and help convert website visitors into customers effectively. Whether you need an e-commerce platform or a simple corporate site, we have the expertise to deliver.",
    imgUrl: "wd.webp"
  },
  {
    title: "Facebook & Instagram Ads",
    description: "Facebook and Instagram Ads are essential tools for expanding your reach and connecting with your target audience on these popular social media platforms. We create and manage effective ad campaigns that focus on your ideal customer demographic, increasing brand visibility, engagement, and conversions through targeted, cost-efficient advertising strategies.",
    imgUrl: "fniads.jpg"
  },
  {
    title: "Google My Business (GMB)",
    description: "Google My Business (GMB) is a free tool provided by Google that allows businesses to manage their online presence across Google Search and Google Maps. We assist with setting up, claiming, and verifying your GMB listing, optimizing your profile to enhance visibility, and leveraging insights to improve customer engagement and track the performance of your business online.",
    imgUrl: "gmb.jpg"
  },
  {
    title: "Trademark Registration",
    description: "Trademark registration is a vital process for businesses looking to protect their intellectual property, including logos, names, and slogans. We guide you through the entire trademark registration process, helping you ensure that your unique branding elements are legally protected, preventing unauthorized use and preserving your brand identity.",
    imgUrl: "tr.png"
  }
];


  // Service cards
  const cardContainer = document.getElementById('cardContainer');

  services.forEach((service) => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 col-sm-6 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';
    card.style.cursor = 'pointer';

    const img = document.createElement('img');
    img.src = `./assets/${service.imgUrl}`;
    img.alt = service.title;
    img.className = 'card-img-top';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    const title = document.createElement('h5');
    title.className = 'card-title text-center';
    title.textContent = service.title;

    cardBody.appendChild(title);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    cardContainer.appendChild(col);

    //Service card click
    card.addEventListener('click', () => {
      document.getElementById('modalTitle').textContent = service.title;
      document.getElementById('modalDescription').textContent = service.description;
      
      // Show the modal
      const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
      modal.show();
    });
  });

  // Close the modal
  document.querySelector('.btn-close').addEventListener('click', function () {
    var modal = bootstrap.Modal.getInstance(document.getElementById('serviceModal'));
    modal.hide(); 
  });
});
