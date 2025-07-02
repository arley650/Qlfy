
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 w-2 h-64 bg-blue-200 rounded-full z-50">
        <div 
          className="bg-blue-600 rounded-full transition-all duration-300 ease-out w-full"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />
      
      <div className="max-w-4xl mx-auto py-16 px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          
          <p><strong>1.1</strong> This Privacy Policy explains how we use your personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>how we collect it</li>
            <li>how we use it</li>
            <li>who we share it with</li>
            <li>the rights and choices you have when it comes to your personal data</li>
          </ul>
          
          <p><strong>1.2 Definitions</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"lender"</strong> is a financial institution which is authorised to offer Products to individuals</li>
            <li><strong>"Partner"</strong> is a trusted third-party who we work with to deliver our Services</li>
            <li><strong>"personal data"</strong> is data which can identify you as an individual, either by itself or when combined with other data</li>
            <li><strong>"Product"</strong> is a personal financial product offered by a lender, such as a secured loan</li>
            <li><strong>"Service(s)"</strong> we use publicly available data and data provided by credit agencies, individuals and brokers to calculate the chances of an individual successfully obtaining certain Products from prospective lenders</li>
            <li><strong>"Service Provider"</strong> is the UK credit reference agency Equifax Limited</li>
            <li><strong>"you"</strong> and <strong>"your"</strong> means any person who accesses and uses the Website or Services</li>
          </ul>
          
          <p><strong>1.3</strong> The main reason we process your personal data is to provide you with the Service that you request from us. As part of our Service, it is necessary for us to share your personal information with our Partners, secured loan brokers and Service Providers. We will only hold your data for as long as necessary to fulfil the purposes for which we collect that data.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Who we are</h2>
          
          <p><strong>2.1</strong> Qualifi Solutions Limited ("Qualifi") is incorporated and registered in England and Wales with company number 14585496. Our registered office is at Market Square House, St James's Street, Nottingham, NG1 6FG.</p>
          
          <p>For the purposes of this Privacy Policy, references to "we", "us", "our" or "Website" are to Qualifi.</p>
          
          <p><strong>2.2</strong> We are the data controller of the personal data that we collect about you. This means that we are the company responsible for deciding how your data is processed.</p>
          
          <p><strong>2.3</strong> If you have any questions relating to this Privacy Policy, our use of your personal data, if you want to contact our Data Protection Officer or if you have any related data protection queries, please write to our Data Protection Officer at contact@qualifisolutions.io or by post at Qualifi Solutions, 4th Floor, Market Square House, St James's Street, Nottingham, NG1 6FG.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How we collect data</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 From you</h3>
          <p>Your Product application data will be provided to us by our Partners. They will obtain this directly from you when you use their websites or mobile applications. This data collection will be subject to their privacy policy, which you should read.</p>
          
          <p>We may also use your previous application data for statistical analysis to further maintain and enhance our models, to enable us to provide you with the most accurate Service that we can.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 From Service Providers</h3>
          <p>We use Service Providers (such as credit agencies who hold data on you themselves) to collect additional data relating to you. We combine this data with other sources of data to provide the Services.</p>
          
          <p>If you use our Service, we will pass your information to Equifax Limited to enable them to retrieve your credit information from the Equifax credit file. They will use a quotation or "soft" credit search that will not harm your credit score and only you can see. For Equifax Limited's terms and conditions, please click here <a href="https://www.equifax.co.uk/About-us/Terms_of_use" className="text-blue-600 hover:underline">https://www.equifax.co.uk/About-us/Terms_of_use</a>.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 From publicly available sources</h3>
          <p>We access publicly available data, including the electoral roll and shared credit performance data. We combine this data with other sources of data to provide the Services.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.4 From third parties</h3>
          <p>If you apply for a Product then the secured loans broker may send us data they hold relating to your application. This allows us to track sales and improve our Services.</p>
          
          <p>We may also obtain data that you have shared with our Partners, but only where you have given them your consent to do so.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. What data we collect</h2>
          
          <p><strong>4.1</strong> The data we may collect when you use our Services includes your name, address, email address, telephone number, date of birth, details about your home together with details of your financial situation, for example, income and expenditure. We may also collect your financial information, for example, bank account or payment details or information about your credit score and/or credit report. We use this data to calculate your chances of successfully obtaining certain Products from prospective lenders.</p>
          
          <p><strong>4.2</strong> The only data we will knowingly collect for children under the age of 16 is their age, so we know the age of your dependents.</p>
          
          <p><strong>4.3</strong> If you are providing us with another person's data, you must first ask them to read this Privacy Policy. In submitting any other person's details, you are confirming to us that you have their permission to do so and that they understand how their details will be used.</p>
          
          <p><strong>4.4</strong> Please note that it is your responsibility to check and ensure that data you provide to use our Services is correct, complete, accurate and not misleading and that you disclose all relevant facts.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. How we use your data</h2>
          
          <p><strong>5.1</strong> We use your data to enable you to access and use our Services including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Passing it to our Service Providers to enable us to obtain the financial information they hold on you to provide our Services, as requested by you. When we contact our Service Providers in this way, a credit report will be generated by carrying out a 'soft' credit check.</li>
            <li>Passing it to our secured loan brokers in order to help you progress your application for a Product.</li>
            <li>Passing it to our Partners, to enable them to display the chances of you successfully obtaining certain Products from a specific lender, as a score or percentage mark. Where our Partners use your data to display a quote for a Product they will act as data controllers of your data.</li>
          </ul>
          
          <p><strong>5.2</strong> To improve aspects of our Website and Services, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The data we collect helps us tailor our content and improve our Services.</li>
            <li>To match our data with information from other sources – we may validate and analyse your data and, in some cases, match it against information that has been collected by a third party to ensure that the data we hold about you is accurate, consistent and well-organised.</li>
          </ul>
          
          <p><strong>5.3</strong> For research, such as analysing market trends and customer demographics; including using the data relating to your eligibility and information about the Products you have taken out to carry out various research and analysis activities to help us review and improve our Services.</p>
          
          <p><strong>5.4</strong> Data retention please refer to Section 11 'How long do we keep your data?'</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Who we share your data with</h2>
          
          <p>When you use any of our Services, we may disclose your data to the below companies. When these companies use your data, they will be acting as data controllers which means that they are in charge of how they handle your data, and we are not responsible for this.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Secured loans brokers</h3>
          <p>In order to help you progress your application for a Product we may pass your data to relevant brokers.</p>
          <p>Our current secured loans broker is: <a href="https://www.fluentmoney.co.uk/data-protection/" className="text-blue-600 hover:underline">https://www.fluentmoney.co.uk/data-protection/</a></p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Service Providers</h3>
          <p>We engage Service Providers to help us provide certain services and/or functionality, such as obtaining specific financial information.</p>
          <p>Our current Service Provider is: <a href="https://www.equifax.co.uk/About-us/Terms_of_use" className="text-blue-600 hover:underline">https://www.equifax.co.uk/About-us/Terms_of_use</a></p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 Partners</h3>
          <p>We share your data with our trusted Partners to enable them to display you an eligibility score for certain Products.</p>
          <p>Our current Partners are:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><a href="https://www.moneysupermarket.com/legal/terms/" className="text-blue-600 hover:underline">https://www.moneysupermarket.com/legal/terms/</a></li>
            <li><a href="https://www.moneysavingexpert.com/site/terms-conditions/" className="text-blue-600 hover:underline">https://www.moneysavingexpert.com/site/terms-conditions/</a></li>
            <li><a href="https://www.clearscore.com/terms" className="text-blue-600 hover:underline">https://www.clearscore.com/terms</a></li>
            <li><a href="https://www.comparethemarket.com/information/terms-and-conditions/" className="text-blue-600 hover:underline">https://www.comparethemarket.com/information/terms-and-conditions/</a></li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.4 Regulators</h3>
          <p>Where permitted or required by law or regulation, we may also disclose data or other information about you for example:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>if required to do so by any court, the Financial Conduct Authority, the Competition and Markets Authority or any other applicable regulatory, compliance, governmental or law enforcement agency</li>
            <li>if necessary, in connection with legal proceedings or potential legal proceedings</li>
            <li>in connection with the sale or potential sale of all or part of our business</li>
            <li>if we reasonably believe false or inaccurate data has been provided and fraud is suspected, details may be passed to fraud prevention agencies to prevent fraud and money laundering</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Legal grounds for processing your data</h2>
          
          <p><strong>7.1</strong> We will only collect and use your data in accordance with UK data protection laws. Our legal grounds for processing your data in the ways described in this Privacy Policy are as follows:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.2 Performance of a contract</h3>
          <p>We process your personal data to provide you with the Service that you request from us, either directly or via a Partner. We combine publicly available data and data provided by credit agencies, individuals and brokers to calculate the chances of an individual successfully obtaining certain Products from prospective lenders.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">7.3 Consent</h3>
          <p>Where we have asked for your consent, we will only collect and process your data if you have given your consent for us to do so.</p>
          
          <p><strong>7.4</strong> We may use and process some of your data where we have sensible and legitimate business grounds for doing so. Under UK data protection laws there is a concept of "legitimate interests" as a justification for processing your data. Our legitimate interests for processing your data are:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To improve our Services. We constantly aim to improve our Services to you and using your data in this way helps us to do this.</li>
            <li>For market research and analysis. This helps us to regularly review and improve the Services we provide. Where possible data that we use/provide in this way will be in an anonymised format.</li>
          </ul>
          
          <p><strong>7.5</strong> You have the right to object to our use of your data for these legitimate interests. If you raise an objection, we will stop processing your data unless very exceptional circumstances apply, in which case we will let you know why we are continuing to process your data. If you wish to exercise this right, please contact our Data Protection Officer at contact@qualifisolutions.io or by post at Qualifi Solutions, 4th Floor, Market Square House, St James's Street, Nottingham, NG1 6FG.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Data Security</h2>
          
          <p><strong>8.1</strong> Your data security is very important to us. This is why we use HTTPS to help keep data about you secure. However, no data transmission over the internet can be guaranteed to be totally secure. Where appropriate, certain data, will be further encrypted to minimise the risk of interception during transit. All your data is encrypted at rest and stored within the United Kingdom or the European Economic Area (EEA).</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Marketing</h2>
          
          <p><strong>9.1</strong> We will not send you any marketing messages.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Your data rights and how to contact us</h2>
          
          <p><strong>10.1</strong> You have certain rights under UK data protection legislation in relation to the data that we hold on you.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.2 Right to access</h3>
          <p>The right to a copy of the data we hold about you. We will ask you to describe the data you require, as well as letting us know about any other email addresses you have supplied to our Services, to enable us to trace your data. Requests for copies of your data will be dealt with within one month, unless your request is complicated or if you have made a large number of requests. In these circumstances it may take us longer to deal with your request, in which case we will let you know if we need more than 28 days to respond.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.3 Right to correct</h3>
          <p>The right to have your data rectified if it is inaccurate or incomplete. Requests for us to correct your data will be dealt with within one month, unless your request is complicated or if you have made a large number of requests. In these circumstances it may take us longer to deal with your request, in which case we will let you know if we need more than 28 days to respond. If we believe that your data is accurate, we will let you know that we will not be amending your data and why.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.4 Right to erasure and to restrict our use of your data</h3>
          <p>The right to request that we delete or remove your data from our systems. There are exceptions to this right which, if applicable, we will explain in our response to you. We will fulfil your request for the right to erasure and to restrict our use of your data within 28 days from the date we receive and acknowledge your request.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.5 Right to restrict our use of your data</h3>
          <p>In some circumstances you can 'block' us from using your data or limit the way in which we can use it. We will fulfil your request for the right to restrict our use of your data within 28 days from the date, we receive and acknowledge your request.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.6 Right to data portability</h3>
          <p>The right to request that we move, copy, or transfer your data. We will fulfil your request for the right to data portability within 28 days from the date, we receive and acknowledge your request.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.7 Right to object</h3>
          <p>The right to object to our use of your data, including where we use it for our legitimate interests. If you raise an objection, we will stop processing your data unless very exceptional circumstances apply, in which case we will let you know why we are continuing to process your data. We will respond to your request in 28 days.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">10.8 The right to be forgotten (or right to erasure)</h3>
          <p>You have the right to have your personal data erased when it is no longer necessary for the purposes for which it was collected. This right also applies if you withdraw your consent for data processing or object to the processing, provided there are no overriding legitimate grounds to continue processing the data. Additionally, your personal data will be erased to comply with legal obligations. We will fulfil your request for the right to be forgotten (or right to erasure) within 28 days from the date, we receive and acknowledge your request.</p>
          
          <p><strong>10.9</strong> If you would like to exercise any of your rights, have any questions, or would like to make a complaint, you may do so:</p>
          <p><strong>By email:</strong> contact@qualifisolutions.io</p>
          <p><strong>By post:</strong> Qualifi Solutions, 4th Floor, Market Square House, St James's Street, Nottingham, NG1 6FG</p>
          
          <p><strong>10.10</strong> If you are not satisfied with the resolution of any complaint you make in relation to your personal data then you may be able to refer your complaint to the Information Commissioner's Office (ICO).</p>
          
          <p><strong>10.11</strong> This Privacy Policy shall be governed and construed in all respects in accordance with the laws of England and Wales.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. How long do we keep your data?</h2>
          
          <p><strong>11.1</strong> We will only hold your data on our systems for the period necessary to fulfil the purposes outlined in this Privacy Policy or until you request it is deleted (unless a longer retention period is required or permitted by law).</p>
          
          <p><strong>11.2</strong> Generally, you can expect us to keep your data while you use the Services. Where you have applied for or purchased Products, we will need to keep your data for longer for accounting purposes, up to six (6) years following the date on which it is provided to us.</p>
          
          <p><strong>11.3</strong> Where you use our Website or Services, and you do not apply for any Products we will hold your data for no longer than one (1) year.</p>
          
          <p><strong>11.4</strong> If you purchase a Product, then the lender, secured loan broker and Partner will keep your data in accordance with their own retention periods and you should check their privacy policies for further information.</p>
          
          <p><strong>11.5</strong> Even if you delete or ask us to delete your data it may persist on backup or archival media for legal, tax or regulatory purposes.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Changes to this Privacy Policy</h2>
          
          <p><strong>12.1</strong> We reserve the right to amend or modify this Privacy Policy at any time, and if we do, we will update this web page to let you know what changes we have made. If you do not agree with any changes, please do not continue to use our Website and Services.</p>
          
          <p className="text-sm text-gray-500 mt-8">Last Updated 8th July 2024</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
