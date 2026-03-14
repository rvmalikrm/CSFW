import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/');
  await page.locator('div').filter({ hasText: 'SeleniumPlaywrightAI' }).nth(2).click();
  await expect(page.getByRole('heading', { name: 'The Testing Academy: Selenium' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Testing Academy: Selenium' })).toBeVisible();
});