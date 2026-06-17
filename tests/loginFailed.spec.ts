import { expect, test } from '@playwright/test'

test('Login failed hrm', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin2')
    await page.getByRole('textbox', { name: 'Password' }).fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page.getByRole('alert')).toBeVisible()
    await expect(page.getByRole('alert')).toContainText('Invalid credentials')
}


)