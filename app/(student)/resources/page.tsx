"use client";

import { useState, useEffect } from "react";
import { resourceService } from "@/services/resource.service";
import { courseService } from "@/services/course.service";
import { Course } from "@/types/course";
import { Resource } from "@/types/resource";
import { toast } from "sonner";
import { Loader2, Download, FileText, Video, Link as LinkIcon, BookOpen, Database } from "lucide-react";

export default function StudentResourcesVaultPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<string | "ALL">("ALL");
  const [resources, setResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingResources, setIsLoadingResources] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await courseService.getMyEnrolled();
        if (response.success && response.data) {
          setCourses(response.data.data || response.data);
          // If we want to load all resources, we might need to loop, but for now we just load the first one or require selection
        }
      } catch (error) {
        toast.error("Failed to load enrolled courses");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchResources = async () => {
      if (selectedCourseId === "ALL") {
        setResources([]); // Or we could fetch for all if we had an endpoint
        return;
      }
      setIsLoadingResources(true);
      try {
        const response = await resourceService.getForCourse(selectedCourseId);
        if (response.success && response.data) {
          setResources(response.data.data || response.data);
        }
      } catch (error) {
        toast.error("Failed to load resources for this course");
      } finally {
        setIsLoadingResources(false);
      }
    };
    fetchResources();
  }, [selectedCourseId]);

  const handleDownload = async (resourceId: string, title: string) => {
    try {
      const response = await resourceService.download(resourceId);
      if (response.success && response.data) {
        toast.success(`Downloading ${title}...`);
        window.open(response.data.downloadUrl, "_blank");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to download resource");
    }
  };

  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'pdf': return <FileText className="w-5 h-5 text-red-500" />;
      case 'video': return <Video className="w-5 h-5 text-blue-500" />;
      case 'notes': return <BookOpen className="w-5 h-5 text-emerald-500" />;
      default: return <LinkIcon className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Banner Deck Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 text-white shadow-sm">
        <span className="text-[10px] font-black bg-[#D00113] text-white px-2.5 py-1 rounded-md uppercase tracking-wider">
          Knowledge Base
        </span>
        <h1 className="text-xl sm:text-2xl font-black tracking-tight mt-2">Study Materials & Assets</h1>
        <p className="text-xs text-slate-400 font-medium mt-1 max-w-xl">
          Access course-specific study materials, PDFs, videos, and toolkits provided by your instructors.
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-[#D00113] animate-spin" />
        </div>
      ) : courses.length === 0 ? (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-12 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 mb-4">
            <Database className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">No Enrolled Courses</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">You must be enrolled in a course to access its study materials.</p>
        </div>
      ) : (
        <>
          {/* Segmented Category Filter Toggles */}
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
            <button
              onClick={() => setSelectedCourseId("ALL")}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all ${
                selectedCourseId === "ALL"
                  ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              Select Course
            </button>
            {courses.map((course) => (
              <button
                key={course._id}
                onClick={() => setSelectedCourseId(course._id!)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider border transition-all ${
                  selectedCourseId === course._id
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          {selectedCourseId === "ALL" ? (
            <div className="text-center py-12">
              <p className="text-sm font-medium text-slate-500">Please select a course above to view its resources.</p>
            </div>
          ) : isLoadingResources ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 text-[#D00113] animate-spin" />
            </div>
          ) : resources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resources.map((item) => (
                <div 
                  key={item._id} 
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                        {getResourceIcon(item.resource_type)}
                      </div>
                      <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                        {item.resource_type}
                      </span>
                    </div>
                    <h3 className="text-sm font-black text-slate-800 group-hover:text-[#D00113] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{item.description}</p>
                  </div>

                  <div className="pt-4 mt-5">
                    <button
                      onClick={() => handleDownload(item._id!, item.title)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-100 group-hover:bg-[#1A1A1A] group-hover:text-white text-slate-700 rounded-xl transition-all text-xs font-black uppercase tracking-wider"
                    >
                      <Download className="w-3.5 h-3.5" /> Download / View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="text-center py-12">
              <p className="text-sm font-medium text-slate-500">No resources available for this course yet.</p>
            </div>
          )}
        </>
      )}

    </div>
  );
}