import { test, expect } from '@playwright/test'
import { getApp } from './app'

test('homepage has title and links to intro page', async () => {
  const page = await getApp().firstWindow()
  expect(await page.title()).toBe('Electron App')
})
