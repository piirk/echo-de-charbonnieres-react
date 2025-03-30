import PageBanner from '../components/PageBanner'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'

const ContactPage = () => {
  return (
    <div>
      <PageBanner 
        title="Contactez-nous"
        subtitle="Nous sommes là pour répondre à vos questions"
      />

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-serif mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
          
          <div className="md:col-span-5">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
