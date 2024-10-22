import React from 'react'
import PageSubtitleComponent from '../components/PageSubtitleComponent'

function Privacy() {
  return (
    <div className='container'>
        <PageSubtitleComponent title="Privacy Policy" />
        <p>Last updated: 16th July 2024</p>
        <h4>Data We Collect</h4>

        <h2>Data We Collect</h2>
        <p>We collect only anonymous, aggregated data about how visitors use our website. This includes:</p>
        <ul>
        <li>Pages visited</li>
        <li>Time spent on pages</li>
        <li>Referring websites</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Screen resolution</li>
        <li>General geographic location (country/city level only)</li>
        </ul>
        <p>We do not collect any personally identifiable information such as names, email addresses, or IP addresses.</p>

        <h2>How We Use the Data</h2>
        <p>The analytical data we collect is used solely to:</p>
        <ul>
        <li>Understand how visitors interact with our website</li>
        <li>Identify areas for improvement</li>
        <li>Optimize the user experience</li>
        <li>Measure the effectiveness of our content</li>
        </ul>
        <p>This data is collected and analyzed in aggregate form only. We cannot identify individual users from this data.</p>

        <h2>Data Collection Method</h2>
        <p>We use PIWIK PRO, a privacy-focused web analytics tool that does not use cookies and complies with GDPR, CCPA and other privacy regulations. No personal data is collected or stored.</p>

        <h2>Third-Party Access</h2>
        <p>The analytical data we collect is not shared with or sold to any third parties.</p>

        <h2>Your Choices</h2>
        <p>You can opt out of analytics tracking by [explain opt-out method].</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

    </div>
  )
}

export default Privacy