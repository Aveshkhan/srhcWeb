import { Accordion, AccordionTab } from "primereact/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Do you provide home visits?",
      answer:
        "Yes, we offer home visit consultations by experienced doctors for elderly patients, children, and those unable to visit the clinic.",
      active: true,
    },
    {
      question: "Do you accept walk-in patients?",
      answer:
        "Yes, walk-ins are welcome. We recommend booking in advance to avoid waiting and ensure a faster consultation with your preferred specialist.",
    },
    {
      question: "Do you provide emergency care?",
      answer:
        "We provide urgent care during clinic hours. For life-threatening emergencies, we recommend going to the nearest hospital (HCG Hospital is very close to us).",
    },
    {
      question: "Can I get blood tests done at the clinic?",
      answer:
        "Yes, we have a fully equipped diagnostic center in partnership with Lupin Diagnostics. Most tests are available on the same day.",
    },
    {
      question: "What are your clinic timings?",
      answer:
        "We are open 24/7 for emergency consultations and home visits. General OPD timings are 8:00 AM to 10:00 PM.",
    },
    {
      question: "Is there a pharmacy at the clinic?",
      answer:
        "Yes, we have an in-house pharmacy with a 15% discount on all medicines for our patients.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-11/12 mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Sticky Image - Left Side */}
          <div className="lg:sticky lg:top-24 self-start">
            <img
              src="	http://srhc.life/wp-content/uploads/2025/12/MG_8035-scaled.jpg"
              alt="Doctor consultation"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>

          {/* Right Side - FAQ Content */}
          <div className="lg:pt-8">
            <div className="mb-10">
              <p className="section-eyebrow">YOUR QUESTIONS ANSWERED</p>
              <h2 className="section-title text-4xl md:text-5xl leading-tight">
                Your Health,
                <br />
                Our Priority
              </h2>
              <p className="section-subtitle mt-4 text-lg">
                Everything you need to know about our services and how we can
                help.
              </p>
            </div>

            <Accordion className="faq-accordion" activeIndex={0}>
              {faqs.map((faq, index) => (
                <AccordionTab key={index} header={faq.question}>
                  <p className="text-slate-600 leading-relaxed m-0">
                    {faq.answer}
                  </p>
                </AccordionTab>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
