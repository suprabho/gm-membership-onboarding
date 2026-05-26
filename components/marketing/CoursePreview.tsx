"use client";

import Link from "next/link";
import { ArrowUpRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { Container } from "@/components/marketing/Container";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { courses } from "@/lib/data/courses";
import { track } from "@/lib/utils/analytics";

export function CoursePreview() {
  return (
    <section
      id="courses"
      className="bg-white py-24 md:py-28"
    >
      <Container width="wide">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            label="Course Library"
            title={
              <>
                Framework Aligned Reporting{" "}
                <span className="text-gray-500">(GRI, BRSR, CDP, CBAM &amp; more)</span>
              </>
            }
            description="One subscription, the whole map — from foundations to advanced disclosure work."
            className="max-w-2xl"
          />
          <Button asChild variant="outline" size="md">
            <Link href="/courses">See Full Library</Link>
          </Button>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={course.learnystUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("course_card_clicked", {
                  id: course.id,
                  framework: course.framework,
                })
              }
              className="group flex flex-col rounded-[8px] border border-gray-200 bg-white p-7 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-green-700 hover:shadow-tile"
            >
              <div className="flex items-center justify-between">
                <Badge tone="mint">{course.framework}</Badge>
                <span className="inline-flex items-center gap-1 text-[13px] text-gray-500">
                  <Clock size={14} /> {course.duration}
                </span>
              </div>

              <h3 className="mt-6 text-[20px] font-bold leading-snug text-ink">
                {course.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-700">
                {course.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4">
                <span className="gm-eyebrow text-gray-500">
                  {course.level}
                </span>
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="text-green-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
