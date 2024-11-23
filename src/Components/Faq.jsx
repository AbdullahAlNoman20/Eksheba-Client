
const Faq = () => {
    return (
        <div className="bg-yellow-50">
            <section className="p-10 lg:w-1/2 lg:mx-auto">
            <div className="collapse collapse-plus bg-white my-5">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">What makes EkSheba different from other e-commerce platforms in Bangladesh?</div>
  <div className="collapse-content">
    <p>EkSheba stands out by blending modern e-commerce services with a focus on Bangladeshi values, ensuring affordability, reliability, and a localized experience.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white my-5">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">What types of products and services are available on EkSheba?</div>
  <div className="collapse-content">
    <p>EkSheba offers a diverse range of products, including electronics, fashion, groceries, and traditional Bangladeshi items, catering to all your shopping needs.

</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white my-5">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">How does EkSheba ensure trust and reliability in its services?</div>
  <div className="collapse-content">
    <p>EkSheba prioritizes customer satisfaction through secure payments, timely delivery, and a robust return policy, ensuring a trustworthy shopping experience.</p>
  </div>
</div>
            </section>
        </div>
    );
};

export default Faq;