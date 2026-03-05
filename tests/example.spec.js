import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const baseURL = process.env.APP_BASE_URL;
const username = process.env.APP_USERNAME;
const password = process.env.APP_PASSWORD;

test('get started link', async ({ page }) => {
  // Navigate to the URL
  await page.goto(baseURL);

  // Fill username
  await page.locator("#username").fill(username);

  // Fill password
  await page.locator("#password").fill(password);

  // Optional: Click login button 
   await page.locator("#signInBtn").click();

  // Optional: Verify login success
  // await expect(page).toHaveURL('https://www.example.com/dashboard');
});