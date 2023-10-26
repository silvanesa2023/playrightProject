import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://qa-navigator.creditunionsfirst.org/');
  const locator = '[id= "username"]'
  page.fill(locator,"hiiiii")