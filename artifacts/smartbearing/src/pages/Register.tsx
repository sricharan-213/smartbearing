import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Activity, User, Mail, Lock, Factory, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Register() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '', email: '', factory: '', phone: '', password: '', confirm: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password && formData.password === formData.confirm) {
      localStorage.setItem('isLoggedIn', 'true');
      setLocation('/dashboard');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-lg bg-navy-card border border-navy rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber/20 via-amber to-amber/20"></div>
        
        <div className="flex justify-center items-center gap-2 mb-8">
          <Activity className="w-8 h-8 text-amber" />
          <span className="font-display font-bold text-2xl text-white">Smart<span className="text-amber">Bearing</span></span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-white mb-2">Register Factory</h1>
          <p className="text-slate-400 text-sm">Create an account to monitor your MSME setup</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <Input name="name" onChange={handleChange} className="pl-9 bg-[#0A0E1A] border-navy text-white h-10" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="email" name="email" onChange={handleChange} className="pl-9 bg-[#0A0E1A] border-navy text-white h-10" required />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">Factory Name</label>
            <div className="relative">
              <Factory className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <Input name="factory" onChange={handleChange} className="pl-9 bg-[#0A0E1A] border-navy text-white h-10" required />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">Phone Number (WhatsApp)</label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <Input name="phone" onChange={handleChange} className="pl-9 bg-[#0A0E1A] border-navy text-white h-10" required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="password" name="password" onChange={handleChange} className="pl-9 bg-[#0A0E1A] border-navy text-white h-10" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-300">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <Input type="password" name="confirm" onChange={handleChange} className="pl-9 bg-[#0A0E1A] border-navy text-white h-10" required />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full mt-6 bg-amber hover:bg-amber/90 text-navy font-bold h-11">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          Already have an account? <Link href="/login" className="text-amber font-medium hover:underline">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
