import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const TermsOfUse = () => {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms Of Use</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 Who we are</h3>
          <p>Qualifi Solutions Limited ("Qualifi") is incorporated and registered in England and Wales with company number 14585496. Our registered office is at Market Square House, St James's Street, Nottingham, NG1 6FG.</p>
          
          <p>For the purposes of these Terms of Use, references to "we", "us", "our" or "Website" are to Qualifi.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Our Services</h3>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.3 Eligibility Services</h3>
          <p>We use publicly available data and data provided by credit agencies, individuals and brokers to calculate the chances of individuals successfully obtaining certain financial products from a prospective lender. We can help you search for loan rates that are currently available on the market, filtered and tailored to your requirements and circumstances, such as term, amount, and loan to property value percentage (LTV) (our "Services"). Any rates we display are based on your requirements only, and a full eligibility check will be required with the selected lender to ensure eligibility for a given Product.</p>
          
          <p>Our Services have been built in partnership with a trusted service provider, Equifax Limited. If you use our Services, we will pass your data to Equifax Limited to enable them to retrieve your credit information from the Equifax credit file. They will use a quotation or "soft" credit search that will not harm your credit score and only you can see. For the terms and conditions associated with Equifax Limited see our Privacy Policy: <a href="/privacy-policy" className="text-blue-600 hover:underline">Qualifi Solutions Privacy Policy</a></p>
          
          <p>In order to help you progress your application for a Product we may pass your data to brokers who will follow up with a phone call if they have consent to do so.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.4 Affordability and Eligibility Services</h3>
          <p>Qualifi Solutions process Credit Reference Agency data combined with your application data supplied on membership and other data we hold to enable the provision of Affordability and Eligibility scores.</p>
          
          <p>Our Services have been built using data from UK Credit Bureaus.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.5 Definitions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"lender"</strong> is a financial institution which is authorised to offer Products to individuals</li>
            <li><strong>"Partner"</strong> is a trusted third-party who we work with to deliver our Service to you</li>
            <li><strong>"Products"</strong> is a personal financial product offered by a lender, such as a secured loan</li>
            <li><strong>"Service Provider"</strong> is a UK credit reference agency</li>
            <li><strong>"Website"</strong> means any mobile applications, channels, or applications operated by Qualifi</li>
            <li><strong>"you"</strong> and <strong>"your"</strong> means any person who accesses and uses the Website or Services</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.6 Your acceptance of these Terms of Use</h3>
          <p>Please carefully read our Terms of Use and Privacy Policy. By using our Services you agree to be bound by and comply with our Terms of Use. If you do not agree to these Terms of Use then you should stop using our Services.</p>
          <p>Our Privacy Policy explains how we, our Partners and our Service Providers use your data. You can read our Privacy Policy here: Qualifi Solutions Privacy Policy V1.2 Website Version.docx</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.7 Changes to these Terms of Use</h3>
          <p>We reserve the right to amend or modify our Terms of Use at any time. Any changes will be published on this web page and be effective immediately.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.8 How to contact us</h3>
          <p>If you have any questions regarding our Terms of Use, or would like to contact us for any other reason, you may do so:</p>
          <p><strong>By email:</strong> <a href="mailto:contact@qualifisolutions.io" className="text-blue-600 hover:underline">contact@qualifisolutions.io</a></p>
          <p><strong>By post:</strong> Qualifi Solutions, 4th Floor, Market Square House, St James's Street, Nottingham, NG1 6FG</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Website and Services content</h2>
          
          <p><strong>2.1</strong> The information contained in the Website and provided by the Services is for general information purposes only. While we endeavour to keep this information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the information. Any reliance you place on such information is strictly at your own risk.</p>
          
          <p><strong>2.2</strong> Where you access our Services through a Partner website, you will be subject to that Partner's terms and conditions of use. We do not have control over the content of these websites, as such, we do not accept responsibility or liability for any third-party website.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Permitted use</h2>
          
          <p><strong>3.1</strong> Our Services are for your personal, non-commercial use only. They may only be accessed and used by a private individual or by a business to seek information directly for that individual or business. Access to and use of the Services other than for personal, non-commercial purposes is strictly prohibited.</p>
          
          <p><strong>3.2</strong> You are not permitted to use our Services:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>in any unlawful, fraudulent, or commercial manner</li>
            <li>to harm, threaten, abuse, embarrass, defame, libel, intimidate or harass another person, or in a way that invades another person's privacy or is obscene, offensive, hateful, indecent, inappropriate, objectionable, unacceptable, discriminatory or damaging as determined by us in our sole discretion</li>
            <li>to create, check, confirm, update, modify or amend another person's records</li>
            <li>to tamper with, modify, reverse engineer, or amend any part of our Website or Services</li>
            <li>in a way that interferes with, disrupts, or imposes an unreasonable or disproportionately large burden on our communications and technical systems</li>
            <li>with any automated software, process, program, robot, web crawler, spider, data mining, trawling or "screen scraping"</li>
          </ul>
          
          <p><strong>3.3</strong> Our Services are intended for use only by individuals located in the UK. Any use of our Services from outside the UK, is at your sole risk, and you are responsible for compliance with all applicable local laws. We make no warranty or representation that any Product and/or any Service we provide is available or otherwise appropriate for use outside of the UK.</p>
          
          <p><strong>3.4</strong> You may operate a link to our Website provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, as solely determined by us. You must not operate a link to the Website in such a way as to suggest or imply any form of association, approval, or endorsement by us. We reserve the right to require you to remove any link to the Website immediately and at any time and we may withdraw any linking permission at any time.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual property</h2>
          
          <p><strong>4.1</strong> We, or our licensors, own the rights to the trademarks, copyright, database rights and other intellectual property rights in the Services, Website and in the information that we display on the Website and all such rights are reserved. You must not use such information or copyright material unless you have written permission from us to do so.</p>
          
          <p><strong>4.2</strong> You may print, copy, download or store extracts of information displayed on the Website or supplied by the Services for your own personal, non-commercial use, provided you do not otherwise breach these Terms of Use.</p>
          
          <p className="font-semibold">"Your responsibilities" and "Our responsibilities and our liability to you" are important and you should read these sections carefully as they exclude or limit our liability to you and detail your responsibilities.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your responsibilities</h2>
          
          <p><strong>5.1</strong> You agree that you will be liable to us for any damage, loss, claim, demand, liability or expense (including reasonable legal fees) that we may suffer or incur arising out of or in connection with your conduct and/or your breach of these Terms of Use.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal information</h3>
          <p><strong>5.2</strong> Our Services provide you with information relating to prequalification decisions relating to certain Products from prospective lenders. You will need to provide specific data to obtain results. The data required enables us and all relevant third-party partners to have the information necessary to provide you with the Services. Certain aspects of Products (such as a secured loan interest rate) will be determined by the data you provide. It is very important that you input all data truthfully, completely, and accurately and that you disclose all relevant facts. Failure to do so may invalidate the Product you obtain.</p>
          
          <p><strong>5.3</strong> If you are in any doubt as to whether any information is relevant or required to be disclosed or that something may be incorrect you should disclose it directly to the relevant lender before you apply for a Product.</p>
          
          <p><strong>5.4</strong> Before you obtain any Product from a lender, you must check all of the data the lender holds about you to ensure it is correct, complete, accurate and not misleading and that you have disclosed all relevant facts. It is your responsibility to identify and correct any mistakes or errors in the data before you obtain a Product. Failure to do so could invalidate the Product.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">User Consent</h3>
          <p><strong>5.5</strong> You must get permission from any other person whose information you intend to provide to the Services before you provide it. In submitting any other person's details, you are confirming to us that you have their permission to do so and that they understand how their details will be used.</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third Parties</h3>
          <p><strong>5.6</strong> Your use of any third-party website and your obtaining of any Products will be subject to the third party's own terms and conditions (which will be different from ours).</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Products</h3>
          <p><strong>5.7</strong> The Products returned through our Services are provided by third parties, over whom we do not have control.</p>
          
          <p><strong>5.8</strong> You should always check the suitability, adequacy and appropriateness of the Product that is of interest to you. It is your responsibility to satisfy yourself that you wish to obtain a Product before applying for it. If you are in any doubt as to the suitability, adequacy, or appropriateness of any Product, we suggest that you seek independent professional advice before you obtain it.</p>
          
          <p><strong>5.9</strong> It is very important before you apply for a Product that you carefully read the accompanying terms and conditions and any other documentation that applies to the Product.</p>
          
          <p><strong>5.10</strong> Our Partner's websites provide information on a wide range of Products but there may be other Products available on the market which are not shown and which may be more appropriate or suitable for you.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Our responsibilities and our liability to you</h2>
          
          <p><strong>6.1</strong> We take reasonable care that the information on our Website and returned by our Services is accurate. However, as we use information from a variety of sources, we are not able to guarantee that information on our Website or returned by our Services is accurate and free from errors or omissions at all times. We reserve the right to add, amend, delete, edit, remove, or modify any information on our Website or returned by our Services at any time and without notice.</p>
          
          <p><strong>6.2</strong> Our Website and Services do not offer financial, investment or other advice or a recommendation or endorsement by us in respect of any Product that may be referenced. Information is provided for general informative purposes only, should not be relied upon by you and is provided so that you can select the Product that you feel is most appropriate to meet your needs.</p>
          
          <p><strong>6.3</strong> The information relating to any Product may not represent the complete descriptions of all the features and terms and conditions of that Product. You must ensure that you carefully read all the features and terms and conditions (including those contained on the lender's website) of a Product before applying for it.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Website and Service availability</h2>
          
          <p><strong>7.1</strong> We take no responsibility for, and will not be liable for, the Website or Services being temporarily unavailable due to technical issues beyond our control. We reserve the right to suspend, restrict or terminate your access to our Website and Services at any time.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Exclusions of our liability</h2>
          
          <p><strong>8.1</strong> Nothing in these Terms of Use excludes or limits our liability for death or personal injury caused by our negligence or for our fraud or excludes or limits our duties or any liability under the Financial Services and Markets Act 2000, as amended, ("FSMA") or any conduct of business rules developed pursuant to FSMA.</p>
          
          <p><strong>8.2</strong> Subject to paragraph 8.1, we do not accept any responsibility or liability for any loss or damage you may incur</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>if any data you provide to our Services is not correct, complete, and accurate, or if it is misleading, or if you fail to disclose all relevant facts</li>
            <li>if any Product you apply for does not meet your requirements or is not suitable for you</li>
            <li>in connection with the accuracy or content of any reviews of Products returned by our Services</li>
            <li>for any acts, omissions, errors, or defaults of any third party in connection with a Product or the Service</li>
            <li>which are indirect or not foreseeable by us when you accessed or used our Services</li>
            <li>arising from an inability to access, from any use of, or from reliance on the data transmitted whilst using our Services; where such losses or damages are caused by any event beyond our reasonable control including as a result of the nature of electronic transmission of data over the internet</li>
          </ul>
          
          <p><strong>8.3</strong> We do not give any warranty that our Website and Services are free from viruses or anything else which may have a harmful effect on any technology.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Complaints</h2>
          
          <p><strong>9.1</strong> We aim to provide you with the most accurate score that we can. If you are unhappy with our Services for any reason, please contact us:</p>
          <p><strong>By email:</strong> <a href="mailto:contact@qualifisolutions.io" className="text-blue-600 hover:underline">contact@qualifisolutions.io</a></p>
          <p><strong>By post:</strong> Qualifi Solutions, 4th Floor, Market Square House, St James's Street, Nottingham, NG1 6FG</p>
          
          <p><strong>9.2</strong> After we have received your complaint and had an opportunity to investigate your concerns, we will issue you with a final response.</p>
          
          <p><strong>9.3</strong> If you are not satisfied with our response and if your complaint relates to how we have handled your personal data, you may have the right to refer your complaint to the Information Commissioner's Office (<a href="https://ico.org.uk/concerns/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ico.org.uk/concerns/</a>).</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Legal</h2>
          
          <p><strong>10.1</strong> If any provision of these Terms of Use is held to be unlawful, invalid, or unenforceable, that provision shall be deemed deleted from these Terms of Use and the validity and enforceability of the remaining provisions shall not be affected.</p>
          
          <p><strong>10.2</strong> These Terms of Use, together with our Privacy Policy, constitute the agreement between you and us relating to your access to and use of the Website and Services, and supersedes any previous agreements.</p>
          
          <p><strong>10.3</strong> No failure or delay by us in exercising any right under these Terms of Use will operate as a waiver of that right; nor will any single or partial exercise by us of any right preclude any further exercise of any right.</p>
          
          <p><strong>10.4</strong> These Terms of Use and your access to and use of the Website and Services shall be governed by and interpreted in accordance with English law.</p>
          
          <p><strong>10.5</strong> We both submit to the exclusive jurisdiction of the courts of England and Wales in connection with these Terms of Use and your access to and use of the Website and Services (including any claims or disputes).</p>
          
          <p className="text-sm text-gray-500 mt-8">Last Updated 1st March 2024</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
