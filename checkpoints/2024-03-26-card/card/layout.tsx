"use client";

import React from 'react';

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove all layout elements, render only children
  return <>{children}</>;
}