"use client";

import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mockTestService } from "@/services/mock-test.service";
import { MockTest } from "@/types/mock-test";
import { toast } from "sonner";
import { Loader2, ArrowLeft, Clock, HelpCircle, Target } from "lucide-react";

interface PageProps {
  params: Promise<{ testId: string }>;
}

export default function StudentTestInstructionsPage({ params }: PageProps) {
  const unwrappedParams = use(params);
  const router = useRouter();
  
  const [test, setTest] = useState<MockTest | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await mockTestService.getById(unwrappedParams.testId);
        if (response.success && response.data) {
          setTest(response.data);
        } else {
          toast.error("Test not found");
          router.push("/tests");
        }
      } catch (error) {
        toast.error("Failed to load test details");
        router.push("/tests");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestDetails();
  }, [unwrappedParams.testId, router]);

  const handleStart = (e: React.MouseEvent) => {
    if (!acceptedTerms) {
      e.preventDefault();
      toast.error("Please accept the terms to proceed");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-[#D00113] animate-spin" />
      </div>
    );
  }

  if (!test) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
      
      {/* Back button track routing */}
      <Link href="/tests" className="text-xs font-black uppercase tracking-wider text-slate-400 hover:text-[#D00113] transition-colors flex items-center gap-1 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Return To Test Deck
      </Link>

      {/* Header Container */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2">
        <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-red-50 text-[#D00113] border border-red-100 rounded-md inline-block">
          Assessment: {test.course?.title || "General"}
        </span>
        <h1 className="text-xl font-black text-slate-900 tracking-tight">{test.title}</h1>
        <p className="text-xs text-slate-400 font-medium">
          {test.description || "Please review structural performance boundaries thoroughly prior to triggering compilation execution steps."}
        </p>
      </div>

      {/* Instructions Framework Blueprint */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <h2 className="text-sm font-black uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3">Examination Protocol Rules</h2>
        
        <div className="space-y-4 text-xs font-medium text-slate-600 leading-relaxed">
          <div className="flex gap-3">
            <span className="text-[#D00113] font-bold">01.</span>
            <p><strong className="text-slate-900">Fixed Session Boundary:</strong> The counter tracking mechanism starts immediately upon confirmation. Once initiated, pauses cannot be performed. Closing the workspace automatically terminates compilation evaluation files.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#D00113] font-bold">02.</span>
            <p><strong className="text-slate-900">Negative Score Allocation:</strong> Standard exam marking rules apply. Each accurate choice awards +{test.settings.marksPerQuestion} point, while erroneous entries deduct -{test.settings.negativeMarking} marks.</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#D00113] font-bold">03.</span>
            <p><strong className="text-slate-900">Anti-Cheat Matrix:</strong> Tab switching, screen minimized instances, or operating auxiliary secondary peripherals tracks a penalty flag count. Accumulating flags breaks network clearance validation protocols.</p>
          </div>
        </div>

        {/* Structural Metrics Information Grid */}
        <div className="grid grid-cols-3 gap-4 border-y border-slate-100 py-4 text-center">
          <div>
            <div className="flex justify-center mb-1"><Clock className="w-4 h-4 text-slate-400" /></div>
            <p className="text-[10px] font-black uppercase text-slate-400">Total Timer</p>
            <p className="text-lg font-black text-slate-900">{test.settings.duration} Mins</p>
          </div>
          <div>
            <div className="flex justify-center mb-1"><HelpCircle className="w-4 h-4 text-slate-400" /></div>
            <p className="text-[10px] font-black uppercase text-slate-400">Total Value</p>
            <p className="text-lg font-black text-slate-900">{test.questions?.length || 0} MCQs</p>
          </div>
          <div>
            <div className="flex justify-center mb-1"><Target className="w-4 h-4 text-slate-400" /></div>
            <p className="text-[10px] font-black uppercase text-slate-400">Total Marks</p>
            <p className="text-lg font-black text-emerald-600">{(test.questions?.length || 0) * test.settings.marksPerQuestion}</p>
          </div>
        </div>

        {/* Dynamic Launch Triggers */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
          <div className="flex items-start gap-2.5">
            <input 
              type="checkbox" 
              id="confirm-rules" 
              className="mt-0.5 accent-[#D00113]" 
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <label htmlFor="confirm-rules" className="text-[11px] text-slate-400 font-medium leading-tight cursor-pointer">
              I certify that my workstation hardware configuration meets environment integrity requirements.
            </label>
          </div>
          
          {/* Points dynamically directly forward to the start page execution node */}
          <Link 
            href={`/tests/${test._id}/start`}
            onClick={handleStart}
            className={`px-6 py-3 text-white text-center font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all shrink-0 ${
              acceptedTerms 
                ? "bg-[#D00113] hover:bg-[#b0010f] shadow-red-600/10" 
                : "bg-slate-300 cursor-not-allowed"
            }`}
          >
            Acknowledge & Start Test
          </Link>
        </div>

      </div>

    </div>
  );
}