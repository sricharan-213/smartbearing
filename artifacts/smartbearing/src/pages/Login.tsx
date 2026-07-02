import { useState } from 'react';
import { useLocation, Link } from 'wouter';
import { Activity, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      setLocation('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-navy-card border border-navy rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber/20 via-amber to-amber/20"></div>
        
        <div className="flex justify-center items-center gap-2 mb-8">
          <Activity className="w-8 h-8 text-amber" />
          <span className="font-display font-bold text-2xl text-white">Smart<span className="text-amber">Bearing</span></span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-slate-400 text-sm">Enter your credentials to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
              <Input 
                type="email" 
                placeholder="engineer@factory.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-[#0A0E1A] border-navy focus-visible:ring-amber text-white placeholder:text-slate-600 h-11"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <a href="#" className="text-xs text-amber hover:text-amber/80 transition-colors">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-500" />
              <Input 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-[#0A0E1A] border-navy focus-visible:ring-amber text-white placeholder:text-slate-600 h-11"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 py-2">
            <input type="checkbox" id="remember" className="rounded border-navy bg-[#0A0E1A] text-amber focus:ring-amber" />
            <label htmlFor="remember" className="text-sm text-slate-400 select-none cursor-pointer">Remember me for 30 days</label>
          </div>

          <Button type="submit" className="w-full h-11 bg-amber hover:bg-amber/90 text-navy font-bold text-base transition-all">
            Sign In <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-slate-400 border-t border-navy pt-6">
          Don't have an account? <Link href="/register" className="text-amber font-medium hover:underline">Register your factory</Link>
        </div>
      </div>
    </div>
  );
}
