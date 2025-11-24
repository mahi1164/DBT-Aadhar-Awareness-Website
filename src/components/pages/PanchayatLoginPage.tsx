import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Home } from 'lucide-react';

export default function PanchayatLoginPage({ onLoginSuccess, onBack, onNavigate }: { onLoginSuccess: () => void; onBack: () => void; onNavigate: (page: string) => void }) {
  const [panchayatId, setPanchayatId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would authenticate the user here
    onLoginSuccess();
  };

  const loginTips = [
    "Use your official Gram Panchayat ID to access the portal.",
    "Ensure that you are authorized to access the Panchayat dashboard.",
    "Keep your login credentials confidential and do not share them with anyone.",
    "The Panchayat dashboard provides tools for organizing awareness camps and tracking progress.",
    "For any assistance, please refer to the help section or contact support.",
    "Log out after each session to ensure the security of the portal."
  ];

  // Function to mask Panchayat ID, showing first 3 and last 2 characters only
  const maskedPanchayatId = (id: string) => {
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
            <div className="mx-auto bg-green-100 text-green-600 p-4 rounded-full w-fit mb-4">
              <Home className="w-10 h-10" />
            </div>
            <CardTitle>Gram Panchayat Login</CardTitle>
            <CardDescription>
              Organize awareness camps and track village-level progress.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="panchayatId">Panchayat ID</Label>
                <Input
                  id="panchayatId"
                  type="text"
                  placeholder="Enter your Panchayat ID"
                  value={panchayatId}
                  onChange={(e) => setPanchayatId(e.target.value)}
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
            <div className="mt-4 text-center">
              <button
                type="button"
                className="text-blue-600 hover:underline bg-transparent border-0 p-0 cursor-pointer"
                onClick={() => onNavigate('panchayat-registration')}
              >
                Register Yourself
              </button>
            </div>
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
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-700">
                  {panchayatId ? panchayatId.slice(0,1).toUpperCase() : 'P'}
                </div>

                <div className="flex-1">
                  <div className="text-sm text-slate-500">Login Type</div>
                  <div className="font-medium text-slate-800">Panchayat ID</div>

                  <div className="mt-3 text-sm text-slate-500">Panchayat ID (masked)</div>
                  <div className="font-mono font-medium text-slate-800">{maskedPanchayatId(panchayatId)}</div>

                  <div className="mt-3 text-sm text-slate-500">Password</div>
                  <div className="font-medium text-slate-800">{password ? '*'.repeat(password.length) : '-'}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Panchayat Login Tips */}
          <Card className="hidden lg:block">
            <CardHeader>
              <CardTitle>Gram Panchayat Login Tips</CardTitle>
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
