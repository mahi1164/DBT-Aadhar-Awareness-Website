import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Building2 } from 'lucide-react';

export default function InstitutionLoginPage({ onLoginSuccess, onBack }: { onLoginSuccess: () => void; onBack: () => void }) {
  const [institutionId, setInstitutionId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would authenticate the user here
    onLoginSuccess();
  };

  const loginTips = [
    "Ensure you are using the official Institution ID provided by the portal administrators.",
    "Passwords are case-sensitive. Please enter your password carefully.",
    "For security reasons, avoid using public computers to log in to the institution portal.",
    "Regularly update your password to protect your institution's data.",
    "If you have trouble logging in, use the 'Forgot Password' link or contact the helpdesk.",
    "Keep your contact information updated to receive important notifications from the portal."
  ];

  // Function to mask institution ID, showing first 3 and last 2 characters only
  const maskedInstitutionId = (id: string) => {
    if (!id) return '-';
    if (id.length <= 5) return id;
    return id.slice(0, 3) + '***' + id.slice(-2);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-12 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT: FORM */}
        <Card className="w-full">
          <CardHeader>
            <div className="mx-auto bg-purple-100 text-purple-600 p-4 rounded-full w-fit mb-4">
              <Building2 className="w-10 h-10" />
            </div>
            <CardTitle>Institution Login</CardTitle>
            <CardDescription>
              Access the dashboard to manage student records and DBT verification.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="institutionId">Institution ID</Label>
                <Input
                  id="institutionId"
                  type="text"
                  placeholder="Enter your Institution ID"
                  value={institutionId}
                  onChange={(e) => setInstitutionId(e.target.value)}
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
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
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
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-700">
                  {institutionId ? institutionId.slice(0,1).toUpperCase() : 'I'}
                </div>

                <div className="flex-1">
                  <div className="text-sm text-slate-500">Login Type</div>
                  <div className="font-medium text-slate-800">Institution ID</div>

                  <div className="mt-3 text-sm text-slate-500">Institution ID (masked)</div>
                  <div className="font-mono font-medium text-slate-800">{maskedInstitutionId(institutionId)}</div>

                  <div className="mt-3 text-sm text-slate-500">Password</div>
                  <div className="font-medium text-slate-800">{password ? '*'.repeat(password.length) : '-'}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Institution Login Tips */}
          <Card className="hidden lg:block">
            <CardHeader>
              <CardTitle>Institution Login Tips</CardTitle>
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
