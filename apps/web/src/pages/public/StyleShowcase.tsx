import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GlassCard } from '@/components/ui/glass-card'
import { ThemeToggle } from '@/components/theme'
import { useTheme } from '@/components/theme/theme-provider'

const StyleShowcase: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  
  // Theme options for selector
  const themeOptions = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' }
  ]
  
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="container mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-display font-semibold">Style Showcase</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm">
              Current theme: <strong>{resolvedTheme}</strong> ({theme})
            </span>
            <select 
              value={theme}
              onChange={(e) => setTheme(e.target.value as any)}
              className="mr-2 bg-background border border-input rounded-md p-1"
            >
              {themeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ThemeToggle />
          </div>
        </div>
        
        <section className="p-6 border rounded-lg">
          <h2 className="text-3xl font-display font-semibold mb-6">Theme Testing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-background text-foreground p-4 border rounded-md">
              Background + Foreground
            </div>
            <div className="bg-card text-card-foreground p-4 border rounded-md">
              Card + Card Foreground
            </div>
            <div className="bg-primary text-white p-4 border rounded-md">
              Primary
            </div>
            <div className="bg-secondary text-white p-4 border rounded-md">
              Secondary
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-display font-semibold mb-6">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-display font-semibold">Heading 1 (SF Pro Display, 32px)</h1>
            <h2 className="text-3xl font-display font-semibold">Heading 2 (SF Pro Display, 24px)</h2>
            <h3 className="text-2xl font-display font-semibold">Heading 3 (SF Pro Display, 20px)</h3>
            <p className="text-base">Body text (SF Pro Text, 16px). This is a paragraph with some sample text to demonstrate the typography.</p>
            <p className="text-sm">Small text (SF Pro Text, 14px). This is smaller text often used for secondary information.</p>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-display font-semibold mb-6">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-lg bg-primary"></div>
              <p className="mt-2">Primary</p>
              <p className="text-xs text-muted-foreground">var(--primary)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-lg bg-secondary"></div>
              <p className="mt-2">Secondary</p>
              <p className="text-xs text-muted-foreground">var(--secondary)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-lg bg-highlight"></div>
              <p className="mt-2">Highlight</p>
              <p className="text-xs text-muted-foreground">var(--highlight)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-lg bg-foreground"></div>
              <p className="mt-2">Foreground</p>
              <p className="text-xs text-muted-foreground">var(--foreground)</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-lg bg-background border"></div>
              <p className="mt-2">Background</p>
              <p className="text-xs text-muted-foreground">var(--background)</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-display font-semibold mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </Button>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-display font-semibold mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>This is a standard card component</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card uses the standard styling with a subtle shadow and border.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
            
            <GlassCard className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Glass Card</h3>
              <p className="text-sm text-muted-foreground mb-4">This card uses glassmorphism effects</p>
              <p className="mb-6">Glass cards use backdrop blur and subtle transparency for a modern look.</p>
              <div className="flex justify-end">
                <Button variant="primary">Action</Button>
              </div>
            </GlassCard>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-display font-semibold mb-6">Badges</h2>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="highlight">Highlight</Badge>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-display font-semibold mb-6">Gradients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-semibold">
              Primary to Secondary Gradient
            </div>
            <div className="h-48 rounded-lg bg-gradient-subtle flex items-center justify-center font-semibold">
              Subtle Background Gradient
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default StyleShowcase
