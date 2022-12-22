import { test, expect } from '@playwright/test'
import { getApp } from './app'

test('Main window has correct title', async () => {
  const page = getApp()
    .windows()
    .find((w) => w.url().includes('index.html'))
  expect(await page.title()).toBe('Hello World!')
})
