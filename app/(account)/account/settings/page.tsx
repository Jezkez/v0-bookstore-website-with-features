'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { ChevronLeft, Moon, Sun, Eye, EyeOff, Bell, Shield, Palette } from 'lucide-react'

export default function SettingsPage() {
  const { isDark, toggleTheme } = useTheme()
  const { user, logout } = useAuth()
  const [settings, setSettings] = useState({
    recommendationsEnabled: true,
    hideReadBooks: false,
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
  })
  const [saved, setSaved] = useState(false)

  const handleToggle = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/account" className="p-2 hover:bg-secondary rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your preferences and account</p>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-base">Email Address</Label>
                <Input type="email" value={user?.email || ''} disabled className="mt-2" />
              </div>
              <div>
                <Label className="text-base">Password</Label>
                <Button variant="outline" className="mt-2">Change Password</Button>
              </div>
            </CardContent>
          </Card>

          {/* Appearance Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  <Label>Dark Mode</Label>
                </div>
                <Switch checked={isDark} onCheckedChange={toggleTheme} />
              </div>
            </CardContent>
          </Card>

          {/* Reading Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Reading Preferences
              </CardTitle>
              <CardDescription>Customize how books appear in your library</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Recommendation Algorithm</Label>
                  <p className="text-sm text-muted-foreground mt-1">Personalized book suggestions based on your reading history</p>
                </div>
                <Switch
                  checked={settings.recommendationsEnabled}
                  onCheckedChange={() => handleToggle('recommendationsEnabled')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Hide Read Books</Label>
                  <p className="text-sm text-muted-foreground mt-1">Remove already read books from your browsing view</p>
                </div>
                <Switch
                  checked={settings.hideReadBooks}
                  onCheckedChange={() => handleToggle('hideReadBooks')}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>Choose how you want to hear from us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground mt-1">Order updates, reviews, and account notifications</p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={() => handleToggle('emailNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground mt-1">Instant alerts about your orders and wishlist</p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={() => handleToggle('pushNotifications')}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Marketing Emails</Label>
                  <p className="text-sm text-muted-foreground mt-1">New releases, deals, and personalized recommendations</p>
                </div>
                <Switch
                  checked={settings.marketingEmails}
                  onCheckedChange={() => handleToggle('marketingEmails')}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Safety */}
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Safety</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/help/privacy" className="block p-3 rounded-lg hover:bg-secondary">
                <div className="font-medium">Privacy Settings</div>
                <p className="text-sm text-muted-foreground">Control your data and privacy</p>
              </Link>
              <Link href="/help/accessibility" className="block p-3 rounded-lg hover:bg-secondary">
                <div className="font-medium">Accessibility</div>
                <p className="text-sm text-muted-foreground">Manage accessibility settings</p>
              </Link>
            </CardContent>
          </Card>

          {/* Save & Logout */}
          <div className="flex gap-4 pt-4">
            <Button onClick={handleSave} className="flex-1">
              {saved ? 'Saved!' : 'Save Changes'}
            </Button>
            <Button
              variant="outline"
              onClick={logout}
              className="flex-1"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
