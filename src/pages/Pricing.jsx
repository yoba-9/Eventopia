// pages/Pricing.jsx
import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annual'

  const pricingPage = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    paddingTop: '40px',
  };

  const pageHeader = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '80px 0',
    textAlign: 'center',
    marginBottom: '60px',
  };

  const headerContent = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const pageTitle = {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '20px',
  };

  const pageSubtitle = {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const container = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px 80px',
  };

  const billingToggle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '60px',
  };

  const toggleLabel = {
    fontSize: '1.1rem',
    fontWeight: '500',
    color: '#333',
  };

  const toggleContainer = {
    position: 'relative',
    width: '200px',
    height: '50px',
    backgroundColor: '#e0e7ff',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    padding: '5px',
    cursor: 'pointer',
  };

  const toggleOption = {
    flex: 1,
    textAlign: 'center',
    padding: '12px',
    fontSize: '1rem',
    fontWeight: '500',
    zIndex: 2,
    transition: 'color 0.3s',
  };

  const activeToggle = {
    color: '#667eea',
    fontWeight: '600',
  };

  const toggleSlider = {
    position: 'absolute',
    top: '5px',
    left: billingCycle === 'monthly' ? '5px' : 'calc(50% + 5px)',
    width: 'calc(50% - 10px)',
    height: 'calc(100% - 10px)',
    backgroundColor: 'white',
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'left 0.3s ease',
  };

  const pricingGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  };

  const pricingCard = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px 30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const popularCard = {
    transform: 'translateY(-10px)',
    border: '2px solid #667eea',
    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)',
  };

  const popularBadge = {
    position: 'absolute',
    top: '0',
    right: '30px',
    backgroundColor: '#667eea',
    color: 'white',
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: '600',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const planName = {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '15px',
  };

  const planDescription = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '25px',
    lineHeight: '1.6',
  };

  const planPrice = {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: '#333',
    marginBottom: '5px',
  };

  const priceCurrency = {
    fontSize: '2rem',
    fontWeight: '600',
    verticalAlign: 'super',
  };

  const billingPeriod = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  };

  const featuresList = {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 30px 0',
  };

  const featureItem = {
    padding: '12px 0',
    borderBottom: '1px solid #f0f0f0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const featureText = {
    fontSize: '1rem',
    color: '#555',
  };

  const checkIcon = {
    color: '#10b981',
    fontSize: '1.1rem',
  };

  const xIcon = {
    color: '#e74c3c',
    fontSize: '1.1rem',
  };

  const ctaButton = {
    width: '100%',
    padding: '16px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const freeButton = {
    backgroundColor: '#f0f2f5',
    color: '#333',
  };

  const proButton = {
    backgroundColor: '#667eea',
    color: 'white',
  };

  const businessButton = {
    backgroundColor: '#1a1a2e',
    color: 'white',
  };

  const comparisonSection = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '50px 40px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    marginTop: '40px',
  };

  const comparisonTitle = {
    fontSize: '2.2rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
  };

  const comparisonTable = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const tableHeader = {
    padding: '20px 15px',
    textAlign: 'left',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    borderBottom: '2px solid #667eea',
  };

  const tableCell = {
    padding: '20px 15px',
    borderBottom: '1px solid #f0f0f0',
    fontSize: '1rem',
    color: '#555',
  };

  const featureName = {
    fontWeight: '500',
    color: '#333',
  };

  const yesIcon = {
    color: '#10b981',
    fontSize: '1.2rem',
  };

  const noIcon = {
    color: '#e74c3c',
    fontSize: '1.2rem',
  };

  const faqSection = {
    marginTop: '80px',
  };

  const faqTitle = {
    fontSize: '2.2rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '50px',
    color: '#333',
  };

  const faqGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '30px',
  };

  const faqItem = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '25px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
  };

  const faqQuestion = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#333',
  };

  const faqAnswer = {
    fontSize: '1rem',
    color: '#666',
    lineHeight: '1.6',
  };

  const pricingPlans = [
    {
      name: 'Free',
      description: 'Perfect for small events and getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Up to 100 attendees',
        '1 event per month',
        'Basic ticketing',
        'Email support',
        'Event listing',
        'No transaction fees on free tickets',
        'Basic analytics',
        'No custom branding',
      ],
      ctaText: 'Get Started Free',
      isPopular: false,
    },
    {
      name: 'Pro',
      description: 'For growing events and professional organizers',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 1,000 attendees',
        '10 events per month',
        'Advanced ticketing',
        'Priority email & chat support',
        'Featured event listing',
        '2% transaction fees',
        'Advanced analytics',
        'Basic custom branding',
        'QR code check-in',
        'Early access to new features',
      ],
      ctaText: 'Start 14-Day Free Trial',
      isPopular: true,
    },
    {
      name: 'Business',
      description: 'For large events and enterprise needs',
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        'Unlimited attendees',
        'Unlimited events',
        'Enterprise ticketing',
        '24/7 phone & chat support',
        'Premium featured listing',
        '1% transaction fees',
        'Custom analytics dashboard',
        'Full custom branding',
        'Team member access',
        'API access',
        'Custom integrations',
        'Dedicated account manager',
      ],
      ctaText: 'Contact Sales',
      isPopular: false,
    },
  ];

  const featureComparison = [
    { name: 'Maximum Attendees', free: '100', pro: '1,000', business: 'Unlimited' },
    { name: 'Events per Month', free: '1', pro: '10', business: 'Unlimited' },
    { name: 'Transaction Fees', free: 'Free tickets only', pro: '2%', business: '1%' },
    { name: 'Custom Branding', free: 'No', pro: 'Basic', business: 'Full' },
    { name: 'Analytics', free: 'Basic', pro: 'Advanced', business: 'Custom Dashboard' },
    { name: 'Support', free: 'Email', pro: 'Priority Email & Chat', business: '24/7 Phone & Chat' },
    { name: 'Team Members', free: '1', pro: '3', business: '10+' },
    { name: 'API Access', free: 'No', pro: 'No', business: 'Yes' },
  ];

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. When upgrading, you\'ll get immediate access to new features. When downgrading, the changes take effect at the start of your next billing cycle.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! The Pro plan comes with a 14-day free trial. No credit card required to start. The Free plan is completely free forever for basic event management.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. All payments are processed securely through encrypted channels.',
    },
    {
      question: 'How are transaction fees calculated?',
      answer: 'Transaction fees are only applied to paid tickets. Free tickets have no fees. Fees are calculated as a percentage of the ticket price plus a small fixed payment processing fee from our payment partners.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. If you cancel during a billing period, you\'ll have access until the end of that period. We don\'t charge cancellation fees.',
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes! We offer a 50% discount on all paid plans for registered non-profit organizations. Contact our sales team with proof of non-profit status to get your discount.',
    },
  ];

  const calculateAnnualSavings = (monthlyPrice) => {
    const annualPrice = monthlyPrice * 12;
    const discountedAnnualPrice = monthlyPrice * 10; // 2 months free
    return annualPrice - discountedAnnualPrice;
  };

  return (
    <div style={pricingPage}>
      <div style={pageHeader}>
        <div style={headerContent}>
          <h1 style={pageTitle}>Simple, Transparent Pricing</h1>
          <p style={pageSubtitle}>
            Choose the perfect plan for your events. All plans include core features 
            with no hidden fees. Start free, upgrade anytime.
          </p>
        </div>
      </div>
      
      <div style={container}>
        {/* Billing Cycle Toggle */}
        <div style={billingToggle}>
          <span style={toggleLabel}>Billed Monthly</span>
          <div 
            style={toggleContainer}
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
          >
            <div style={toggleSlider}></div>
            <div style={{...toggleOption, ...(billingCycle === 'monthly' ? activeToggle : {})}}>
              Monthly
            </div>
            <div style={{...toggleOption, ...(billingCycle === 'annual' ? activeToggle : {})}}>
              Annual
            </div>
          </div>
          <span style={toggleLabel}>Billed Annually</span>
          {billingCycle === 'annual' && (
            <span style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginLeft: '10px',
            }}>
              Save 2 months free!
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div style={pricingGrid}>
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            const displayPrice = billingCycle === 'annual' ? price / 10 : price; // Show monthly equivalent
            
            return (
              <div 
                key={plan.name}
                style={{
                  ...pricingCard,
                  ...(plan.isPopular ? popularCard : {})
                }}
              >
                {plan.isPopular && <div style={popularBadge}>MOST POPULAR</div>}
                
                <h2 style={planName}>{plan.name}</h2>
                <p style={planDescription}>{plan.description}</p>
                
                <div style={planPrice}>
                  <span style={priceCurrency}>ETB</span>
                  {displayPrice === 0 ? '0' : displayPrice}
                </div>
                
                <p style={billingPeriod}>
                  {displayPrice === 0 ? 'Free forever' : (
                    billingCycle === 'monthly' 
                      ? `per month` 
                      : `per month, billed annually (ETB ${price} total)`
                  )}
                  {billingCycle === 'annual' && plan.monthlyPrice > 0 && (
                    <span style={{ color: '#10b981', fontWeight: '600', marginLeft: '5px' }}>
                      Save ETB {calculateAnnualSavings(plan.monthlyPrice)}
                    </span>
                  )}
                </p>
                
                <ul style={featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} style={featureItem}>
                      {feature.startsWith('No ') ? (
                        <i className="fas fa-times" style={xIcon}></i>
                      ) : (
                        <i className="fas fa-check" style={checkIcon}></i>
                      )}
                      <span style={featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  style={{
                    ...ctaButton,
                    ...(plan.name === 'Free' ? freeButton : 
                         plan.name === 'Pro' ? proButton : businessButton)
                  }}
                  onMouseEnter={(e) => {
                    if (plan.name === 'Free') {
                      e.target.style.backgroundColor = '#e2e8f0';
                    } else if (plan.name === 'Pro') {
                      e.target.style.backgroundColor = '#5a6fd8';
                      e.target.style.transform = 'translateY(-2px)';
                    } else {
                      e.target.style.backgroundColor = '#0f0f1f';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.name === 'Free') {
                      e.target.style.backgroundColor = freeButton.backgroundColor;
                    } else if (plan.name === 'Pro') {
                      e.target.style.backgroundColor = proButton.backgroundColor;
                      e.target.style.transform = 'none';
                    } else {
                      e.target.style.backgroundColor = businessButton.backgroundColor;
                      e.target.style.transform = 'none';
                    }
                  }}
                >
                  {plan.ctaText}
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table */}
        <div style={comparisonSection}>
          <h2 style={comparisonTitle}>Plan Comparison</h2>
          <table style={comparisonTable}>
            <thead>
              <tr>
                <th style={tableHeader}>Features</th>
                <th style={tableHeader}>Free</th>
                <th style={tableHeader}>Pro</th>
                <th style={tableHeader}>Business</th>
              </tr>
            </thead>
            <tbody>
              {featureComparison.map((feature, index) => (
                <tr key={index}>
                  <td style={{...tableCell, ...featureName}}>{feature.name}</td>
                  <td style={tableCell}>
                    {feature.free === 'No' ? (
                      <i className="fas fa-times" style={noIcon}></i>
                    ) : feature.free === 'Yes' ? (
                      <i className="fas fa-check" style={yesIcon}></i>
                    ) : (
                      feature.free
                    )}
                  </td>
                  <td style={tableCell}>
                    {feature.pro === 'No' ? (
                      <i className="fas fa-times" style={noIcon}></i>
                    ) : feature.pro === 'Yes' ? (
                      <i className="fas fa-check" style={yesIcon}></i>
                    ) : (
                      feature.pro
                    )}
                  </td>
                  <td style={tableCell}>
                    {feature.business === 'No' ? (
                      <i className="fas fa-times" style={noIcon}></i>
                    ) : feature.business === 'Yes' ? (
                      <i className="fas fa-check" style={yesIcon}></i>
                    ) : (
                      feature.business
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FAQ Section */}
        <div style={faqSection}>
          <h2 style={faqTitle}>Frequently Asked Questions</h2>
          <div style={faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} style={faqItem}>
                <h3 style={faqQuestion}>{faq.question}</h3>
                <p style={faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          backgroundColor: '#667eea',
          borderRadius: '12px',
          padding: '60px 40px',
          textAlign: 'center',
          marginTop: '80px',
          color: 'white',
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px',
          }}>
            Ready to Host Amazing Events?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            opacity: 0.9,
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px',
          }}>
            Join thousands of event organizers who trust Eventopia. Start free, no credit card required.
          </p>
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button style={{
              backgroundColor: 'white',
              color: '#667eea',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'none';
              e.target.style.boxShadow = 'none';
            }}>
              Start Free Trial
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '16px 40px',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'none';
            }}>
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;