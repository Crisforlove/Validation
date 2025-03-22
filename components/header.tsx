"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "introduction", label: "介绍", enLabel: "Introduction" },
    { id: "validationIntro", label: "验证概述", enLabel: "Validation" },
    { id: "rangeCheck", label: "范围检查", enLabel: "Range Check" },
    { id: "lengthCheck", label: "长度检查", enLabel: "Length Check" },
    { id: "typeCheck", label: "类型检查", enLabel: "Type Check" },
    { id: "presenceCheck", label: "存在检查", enLabel: "Presence Check" },
    { id: "formatCheck", label: "格式检查", enLabel: "Format Check" },
    { id: "checkDigit", label: "校验位", enLabel: "Check Digit" },
    { id: "verificationIntro", label: "核实概述", enLabel: "Verification" },
    { id: "doubleEntry", label: "双重输入", enLabel: "Double Entry" },
    { id: "screenCheck", label: "屏幕检查", enLabel: "Screen Check" },
    { id: "challenge", label: "挑战", enLabel: "Challenge" },
    { id: "applications", label: "应用", enLabel: "Applications" },
    { id: "summary", label: "总结", enLabel: "Summary" },
  ]

  const handleNavClick = (id: string) => {
    onNavigate(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 flex items-center">
              <span className="mr-2">🕵️</span>
              数据侦探学院
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => handleNavClick(item.id)}
                className="text-sm"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white border-t">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm justify-start"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

