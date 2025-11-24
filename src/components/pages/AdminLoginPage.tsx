import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Shield } from 'lucide-react';

export default function AdminLoginPage({ onLoginSuccess, onBack }: { onLoginSuccess: () => void; onBack: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would authenticate the user here
    onLoginSuccess();
  };

  const loginTips = [
    "This portal is for authorized administrators only. All activities are monitored.",
    "Use a strong, unique password for your administrator account.",
    "Enable two-factor authentication if available for enhanced security.",
    "Be cautious of phishing attempts. Only log in through the official portal URL.",
    "Regularly review audit logs and user activity to ensure the integrity of the portal.",
    "Report any suspicious activity to the security team immediately."
  ];

  // Function to mask username, showing first 3 and last 2 characters only
  const maskedUsername = (name: string) => {
    if (!name) return '-';
    if (name.length <= 5) return name;
    return name.slice(0, 3) + '***' + name.slice(-2);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-12 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: FORM */}
        <Card className="w-full">
          <CardHeader>
            <div className="mx-auto bg-red-100 text-red-600 p-4 rounded-full w-fit mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Access the administrative dashboard to manage the portal.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center justify-between pt-4">
                <Button type="button" variant="ghost" onClick={onBack}>Back</Button>
                <a href="#" className="text-sm text-blue-600 hover:underline">Contact Support</a>
                <Button type="submit">Login</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* RIGHT: LIVE PREVIEW + TIPS */}
        <div className="flex flex-col gap-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>Realtime view of the login details (for demo only)</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-700">
                  {username ? username.slice(0,1).toUpperCase() : 'A'}
                </div>

                <div className="flex-1">
                  <div className="text-sm text-slate-500">Login Type</div>
                  <div className="font-medium text-slate-800">Username</div>

                  <div className="mt-3 text-sm text-slate-500">Username (masked)</div>
                  <div className="font-mono font-medium text-slate-800">{maskedUsername(username)}</div>

                  <div className="mt-3 text-sm text-slate-500">Password</div>
                  <div className="font-medium text-slate-800">{password ? '*'.repeat(password.length) : '-'}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Admin Login Tips */}
          <Card className="hidden lg:block">
            <CardHeader>
              <CardTitle>Admin Login Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-sm text-gray-600 dark:text-gray-400">
                {loginTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
