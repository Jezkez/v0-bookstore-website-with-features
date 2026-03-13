'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Card } from '@/components/ui/card'

export default function AccessibilityPage() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Accessibility</h1>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Statement</h2>
          <p className="text-muted-foreground mb-4">
            Re:Book is committed to ensuring that our website is accessible to all users, regardless of ability. We are continuously working to improve accessibility for all visitors.
          </p>
          <p className="text-muted-foreground">
            If you experience any difficulty accessing our website or have accessibility-related questions, please contact us at accessibility@rebook.com.
          </p>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">WCAG 2.1 Compliance</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to ensure our website is accessible to all users including those with disabilities.</p>
            <div>
              <p className="font-semibold text-foreground mb-2">Key Features:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Keyboard navigation support</li>
                <li>Screen reader compatibility</li>
                <li>Sufficient color contrast</li>
                <li>Alt text for images</li>
                <li>Resizable text and zoom support</li>
                <li>Descriptive link text</li>
                <li>Form labels and error messages</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-foreground mb-2">Text Size Control</h3>
              <p className="text-muted-foreground">Use browser zoom (Ctrl/Cmd + Plus) to increase text size up to 200%.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Dark Mode</h3>
              <p className="text-muted-foreground">Toggle dark mode in settings for reduced eye strain. Automatically respects system preferences.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Screen Reader Support</h3>
              <p className="text-muted-foreground">Our website is compatible with popular screen readers like NVDA and JAWS. All content is properly labeled and structured.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Keyboard Navigation</h3>
              <p className="text-muted-foreground">You can navigate the entire website using keyboard. Use Tab to navigate and Enter to select.</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-2">Skip Links</h3>
              <p className="text-muted-foreground">Skip links at the top of the page allow you to jump directly to main content, bypassing navigation.</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Browser & Assistive Technology Support</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><span className="font-semibold text-foreground">Screen Readers:</span> NVDA, JAWS, VoiceOver</p>
            <p><span className="font-semibold text-foreground">Browsers:</span> Chrome, Firefox, Safari, Edge (latest versions)</p>
            <p><span className="font-semibold text-foreground">Mobile:</span> Native accessibility features on iOS and Android</p>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Menu</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>You can customize your reading experience through our Accessibility Settings menu:</p>
            <div className="mt-4 space-y-2">
              <div className="border rounded p-3 bg-muted/50">
                <p className="font-semibold text-foreground mb-1">Text Size</p>
                <p className="text-sm">Adjust text size: Small, Normal, Large, Extra Large</p>
              </div>
              <div className="border rounded p-3 bg-muted/50">
                <p className="font-semibold text-foreground mb-1">Color Contrast</p>
                <p className="text-sm">Choose standard, high, or inverted contrast mode</p>
              </div>
              <div className="border rounded p-3 bg-muted/50">
                <p className="font-semibold text-foreground mb-1">Font Selection</p>
                <p className="text-sm">Choose from multiple dyslexia-friendly fonts</p>
              </div>
              <div className="border rounded p-3 bg-muted/50">
                <p className="font-semibold text-foreground mb-1">Animation</p>
                <p className="text-sm">Reduce or disable animations for sensitivity to motion</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Known Issues</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>We're actively working to resolve accessibility issues. If you encounter any barriers, please report them to accessibility@rebook.com with:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Page URL</li>
              <li>Browser and assistive technology used</li>
              <li>Description of the issue</li>
              <li>Steps to reproduce</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-muted/50">
          <h3 className="text-lg font-bold text-foreground mb-2">Accessibility Contact</h3>
          <p className="text-muted-foreground">Email: accessibility@rebook.com</p>
          <p className="text-muted-foreground">We respond to accessibility inquiries within 48 hours.</p>
        </Card>
      </div>
    </MainLayout>
  )
}
