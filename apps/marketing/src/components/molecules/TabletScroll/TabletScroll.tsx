"use client";
import React from "react";
import { ContainerScroll } from "~/components/ui/container-scroll-animation";
// import AppPreviewImg from '~/images/app-preview-2.png'
import AppPreviewImg from '~/images/overview-preview.png'
import Image from "next/image";

function TabletScroll() {
  return (
    <div className="flex flex-col overflow-x-visible">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-black pb-8">
              Unlock new paradigms.<br />
            </h2>
          </>
        }
      >

        <Image 
            src={AppPreviewImg}
            alt='Trade Tracker App Preview'
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
        />

      </ContainerScroll>
    </div>
  );
}

export default TabletScroll