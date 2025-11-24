import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export default function PanchayatRegistrationPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [panchayatName, setPanchayatName] = useState('');
  const [panchayatId, setPanchayatId] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [digilockerId, setDigilockerId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // TODO: Implement registration logic here including DigiLocker auth
    alert('Gram Panchayat registration submitted successfully');
    onNavigate('panchayat-login');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-12 flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Gram Panchayat Registration</CardTitle>
            <CardDescription>Please provide the details below to register your Gram Panchayat user.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="panchayatName">Gram Panchayat Name *</Label>
                <Input
                  type="text"
                  id="panchayatName"
                  placeholder="Enter Gram Panchayat name"
                  value={panchayatName}
                  onChange={(e) => setPanchayatName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="panchayatId">Panchayat ID *</Label>
                <Input
                  type="text"
                  id="panchayatId"
                  placeholder="Enter Panchayat ID"
                  value={panchayatId}
                  onChange={(e) => setPanchayatId(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  type="text"
                  id="district"
                  placeholder="Enter district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  type="text"
                  id="state"
                  placeholder="Enter state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson">Contact Person *</Label>
                <Input
                  type="text"
                  id="contactPerson"
                  placeholder="Enter contact person's name"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email *</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter contact email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aadhaar">Authorized Person Aadhaar Number *</Label>
                <Input
                  type="text"
                  id="aadhaar"
                  placeholder="Enter authorized person's Aadhaar number"
                  maxLength={12}
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ''))}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="digilockerId">DigiLocker ID</Label>
                <Input
                  type="text"
                  id="digilockerId"
                  placeholder="DigiLocker ID (optional)"
                  value={digilockerId}
                  onChange={(e) => setDigilockerId(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Register Gram Panchayat</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
