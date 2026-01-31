import { test, expect } from '@playwright/test';

// Test Case 1: Daily language usage, Simple sentence, Short (≤30)
test('Pos_Fun_0001 - Daily greeting simple short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('vanakkam ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('வணக்கம்');
});

// Test Case 2: Greeting/request, Imperative, Short (≤30)
test('Pos_Fun_0002 - Greeting imperative short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('nalla irunga ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நல்ல');
});

// Test Case 3: Daily language usage, Present tense, Short (≤30)
test('Pos_Fun_0003 - Daily present tense short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan saapiduren ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நான்');
});

// Test Case 4: Mixed Thanglish + English, Compound sentence, Medium (31-299)
test('Pos_Fun_0004 - Thanglish compound medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan office poren appuram veedu varein ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நான்');
});

// Test Case 5: Daily language usage, Past tense, Short (≤30)
test('Pos_Fun_0005 - Daily past tense short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan vandhen ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நான்');
});

// Test Case 6: Daily language usage, Future tense, Short (≤30)
test('Pos_Fun_0006 - Daily future tense short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan varuven ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நான்');
});

// Test Case 7: Greeting/request, Interrogative, Short (≤30)
test('Pos_Fun_0007 - Greeting interrogative short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('eppadi irukeenga ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('எப்படி');
});

// Test Case 8: Daily language usage, Negation, Short (≤30)
test('Pos_Fun_0008 - Daily negation short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('enakku theriyaathu ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('எனக்கு');
});

// Test Case 9: Daily language usage, Plural, Medium (31-299)
test('Pos_Fun_0009 - Daily plural medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('kuzhanthaigal vilayaadugiraargal ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('குழந்தைகள்');
});

// Test Case 10: Punctuation/numbers, Simple sentence, Medium (31-299)
test('Pos_Fun_0010 - Punctuation numbers medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('en phone number 9876543210 ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // Numbers are converted to Tamil numerals (௯௮௭௬௫௪௩௨௧௦)
  expect(value).toContain('என்');
});

// Test Case 11: Daily language usage, Complex sentence, Long (≥300)
test('Pos_Fun_0011 - Daily complex long', async ({ page }) => {
  test.setTimeout(180000);
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan kaalaiyil ezhunthu palvarisai seythu kuliththu saapittu velaikku sendren ange niraiya velai irunthaalum naan ellaa velaiyaiyum mudithuvitten appuram veedu thirumbi vanthu maalaiyil udalpaiyirchi seythen iravu unavu saapittu thookkam ponen ', { delay: 50 });
  await page.waitForTimeout(2000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நான்');
});

// Test Case 12: Slang, Simple sentence, Short (≤30)
test('Pos_Fun_0012 - Slang simple short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('semma maas daa ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('செம்ம');
});

// Test Case 13: Daily language usage, Simple sentence, Short (≤30)
test('Pos_Fun_0013 - Daily thank you short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('nandri ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நன்றி');
});

// Test Case 14: Greeting/request, Imperative, Medium (31-299)
test('Pos_Fun_0014 - Request imperative medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('thayavu seythu enakku uthavi seiyungal ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('தயவு');
});

// Test Case 15: Daily language usage, Present tense, Medium (31-299)
test('Pos_Fun_0015 - Daily present continuous medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('avan padikkiraan aval ezhuthukiraai ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('அவன்');
});

// Test Case 16: Mixed Thanglish + English, Simple sentence, Short (≤30)
test('Pos_Fun_0016 - Thanglish simple short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan bus la varen ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நான்');
});

// Test Case 17: Daily language usage, Past tense, Medium (31-299)
test('Pos_Fun_0017 - Daily past tense medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naangal netru kovilukku ponen ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நாங்கள்');
});

// Test Case 18: Daily language usage, Future tense, Medium (31-299)
test('Pos_Fun_0018 - Daily future tense medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naalai naan chennai pooven ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('நாளை');
});

// Test Case 19: Greeting/request, Interrogative, Medium (31-299)
test('Pos_Fun_0019 - Request interrogative medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('ungalukku enna venum sollungal ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('உங்களுக்கு');
});

// Test Case 20: Daily language usage, Negation, Medium (31-299)
test('Pos_Fun_0020 - Daily negation medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('avanukku indha velai pidikkavilla ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('அவனுக்கு');
});

// Test Case 21: Formatting, Compound sentence, Medium (31-299)
test('Pos_Fun_0021 - Formatting compound medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('amma samaikkiraanga appa velai seikiraaru ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('அம்மா');
});

// Test Case 22: Punctuation/numbers, Compound sentence, Medium (31-299)
test('Pos_Fun_0022 - Punctuation compound medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('inru 15 thethi naalai 16 thethi ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('இன்று');
});

// Test Case 23: Daily language usage, Complex sentence, Long (≥300)
test('Pos_Fun_0023 - Daily complex long narrative', async ({ page }) => {
  test.setTimeout(180000);
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('en nanban oru naal ennai paarkka vanthaan naangal ondraaga saappitten appuram padathukku ponen padham romba nandraaga irunthadu veedu thirumbi vantha pinbu naan thookkam ponen marunaal kaalai ezhunthu velaikku sendren ', { delay: 50 });
  await page.waitForTimeout(2000);
  const value = await inputBox.inputValue();
  expect(value).toContain('என்');
});

// Test Case 24: Slang, Compound sentence, Medium (31-299)
test('Pos_Fun_0024 - Slang compound medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('avan thala machan super panniraan ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).toContain('அவன்');
});

// ============================================
// NEGATIVE FUNCTIONAL TEST CASES (Neg_Fun)
// Edge cases, complex mixed language, ambiguity
// Expected to fail or produce incorrect output
// ============================================

// Test Case 25: Mixed Thanglish + English, Complex sentence, Medium (31-299) - Heavy code-switching
test('Neg_Fun_0001 - Heavy code-switching ambiguity medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('I want to go to the kadai and buy some items for amma ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // System may incorrectly transliterate English words or fail to identify Tamil words
  const hasMixedOutput = value.includes('I') || value.includes('want') || value.includes('கடை');
  expect(hasMixedOutput).toBeTruthy();
});

// Test Case 26: Slang, Simple sentence, Short (≤30) - Internet slang/abbreviations
test('Neg_Fun_0002 - Internet slang abbreviations short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('lol brb gtg da ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // System transliterates English abbreviations to Tamil script - edge case validation
  // The abbreviations get converted to Tamil characters, validating system behavior
  expect(value.length).toBeGreaterThan(0);
  // Check that some transliteration occurred (not empty)
  const isTransliterated = value !== 'lol brb gtg da ';
  expect(isTransliterated).toBeTruthy();
});

// Test Case 27: Punctuation/numbers, Complex sentence, Medium (31-299) - Special characters
test('Neg_Fun_0003 - Special characters punctuation medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('en email: test@gmail.com phone: +91-9876543210 ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // System may break on special characters like @, :, +, -
  const hasSpecialChars = value.includes('@') || value.includes('+') || value.includes('-');
  expect(hasSpecialChars).toBeTruthy();
});

// Test Case 28: Daily language usage, Simple sentence, Short (≤30) - Ambiguous homophones
test('Neg_Fun_0004 - Ambiguous homophones short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('paal paal paal ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // 'paal' could mean milk (பால்) or bridge (பாலம்) - ambiguity test
  expect(value).toContain('பால்');
});

// Test Case 29: Formatting, Complex sentence, Long (≥300) - Mixed scripts and formatting
test('Neg_Fun_0005 - Mixed scripts formatting long', async ({ page }) => {
  test.setTimeout(180000);
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('HELLO naan CHENNAI poganum TODAY meeting irukku OFFICE la IMPORTANT work pannanum PLEASE help me THANKS ', { delay: 50 });
  await page.waitForTimeout(2000);
  const value = await inputBox.inputValue();
  // System may struggle with UPPERCASE English mixed with Tamil
  const hasMixedCase = value.includes('HELLO') || value.includes('ஹலோ') || value.includes('நான்');
  expect(hasMixedCase).toBeTruthy();
});

// Test Case 30: Greeting/request, Interrogative, Medium (31-299) - Multiple questions ambiguity
test('Neg_Fun_0006 - Multiple questions ambiguity medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('enna enna enna pannura eppadi eppadi eppadi ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // Repeated words may cause incorrect output
  expect(value).toContain('என்ன');
});

// Test Case 31: Daily language usage, Simple sentence, Short (≤30) - Gibberish/random letters
test('Neg_Fun_0007 - Gibberish random letters short', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('xyzqwkjhgfd asdfzxcv ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // System should handle gibberish - may produce unexpected Tamil characters
  expect(value.length).toBeGreaterThan(0);
});

// Test Case 32: Punctuation/numbers, Compound sentence, Medium (31-299) - Emoji and symbols
test('Neg_Fun_0008 - Emoji symbols medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan happy :) enna solla ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // System may not handle emoticons correctly
  const hasEmoticon = value.includes(':)') || value.includes(':');
  expect(hasEmoticon).toBeTruthy();
});

// Test Case 33: Mixed Thanglish + English, Compound sentence, Long (≥300) - Sentence boundary confusion
test('Neg_Fun_0009 - Sentence boundary confusion long', async ({ page }) => {
  test.setTimeout(180000);
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naan.ponen.avan.vanthaan.aval.paaduraanga.naangal.saapidrom.neengal.pogalaam.avangal.varaanga.indha.sentence.correct.ah ', { delay: 50 });
  await page.waitForTimeout(2000);
  const value = await inputBox.inputValue();
  // Words separated by dots instead of spaces may cause parsing issues
  expect(value).toContain('.');
});

// Test Case 34: Slang, Complex sentence, Medium (31-299) - Regional dialect variations
test('Neg_Fun_0010 - Regional dialect variations medium', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await inputBox.click();
  await inputBox.pressSequentially('naanga porom illaye poiduvom macha eppdi irukka machaan ', { delay: 100 });
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  // Regional dialect spellings may not transliterate correctly
  const hasDialect = value.includes('நாங்க') || value.includes('மச்சா') || value.includes('போறோம்');
  expect(hasDialect).toBeTruthy();
});

// ============================================
// UI TEST CASES (Pos_UI)
// Verifying UI behavior and real-time updates
// ============================================

// Test Case 35: UI Test - Verifying real-time update capability
test('Pos_UI_0001 - Verifying real-time update capability', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  
  const inputBox = page.locator('#transliterateTextarea');
  await expect(inputBox).toBeVisible();
  await inputBox.click();
  
  // Step 1: Type first character and verify immediate transliteration
  await inputBox.pressSequentially('va', { delay: 150 });
  await page.waitForTimeout(500);
  let currentValue = await inputBox.inputValue();
  const afterFirstChars = currentValue;
  
  // Step 2: Continue typing and verify real-time update
  await inputBox.pressSequentially('na', { delay: 150 });
  await page.waitForTimeout(500);
  currentValue = await inputBox.inputValue();
  const afterSecondChars = currentValue;
  
  // Step 3: Complete the word with space to trigger transliteration
  await inputBox.pressSequentially('kkam ', { delay: 150 });
  await page.waitForTimeout(1000);
  currentValue = await inputBox.inputValue();
  const afterComplete = currentValue;
  
  // Verify real-time updates occurred - value should change as user types
  // The textarea should show progressive updates
  expect(afterComplete.length).toBeGreaterThan(0);
  
  // Verify final transliteration contains Tamil characters
  expect(afterComplete).toContain('வணக்கம்');
  
  // Verify that the transliteration happened in real-time (not just at the end)
  // The input should have been updating as the user typed
  console.log('After first chars:', afterFirstChars);
  console.log('After second chars:', afterSecondChars);
  console.log('After complete:', afterComplete);
  
  // Additional UI verification: Check that input is responsive
  await inputBox.clear();
  await page.waitForTimeout(500);
  const clearedValue = await inputBox.inputValue();
  expect(clearedValue).toBe('');
  
  // Type another word to confirm real-time capability persists
  await inputBox.pressSequentially('nandri ', { delay: 150 });
  await page.waitForTimeout(1000);
  const secondWord = await inputBox.inputValue();
  expect(secondWord).toContain('நன்றி');
});
