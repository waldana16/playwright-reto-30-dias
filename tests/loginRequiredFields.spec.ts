import { expect, test } from '@playwright/test'

test('Login required fields hrm', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(
        page.locator('.oxd-input-group.oxd-input-field-bottom-space')
            .filter({ hasText: 'Username' })
            .getByText('Required')
    ).toBeVisible();
    await expect(
        page.locator('.oxd-input-group.oxd-input-field-bottom-space')
            .filter({ hasText: 'Password' })
            .getByText('Required')
    ).toBeVisible();

}


)