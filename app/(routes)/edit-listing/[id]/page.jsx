"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function EditListing() {
  return (
    <div className="px-10 md:px-20">
      <h2 className="font-bold text-2xl">Enter Some more details about your listing.</h2>
      <div className="p-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div>
            <h2>Rent or Sell?</h2>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
