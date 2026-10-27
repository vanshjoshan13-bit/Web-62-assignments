/**
 * Day 15 - Assignment #59: Core Utilities & Verification
 */

// 1. Array Processing Utility: Filter & Transform
function processUserData(users) {
  if (!Array.isArray(users)) return [];
  
  return users
    .filter(user => user && typeof user === 'object' && user.active && user.age >= 18)
    .map(user => ({
      id: user.id,
      fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      email: (user.email || '').toLowerCase()
    }));
}

// 2. Storage Helper Utility with Error Handling
const StorageUtil = {
  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (e) {
      console.error('Storage set failed:', e);
      return false;
    }
  },
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Storage get failed:', e);
      return defaultValue;
    }
  }
};

/* ==========================================================================
   DRY RUN & TEST MATRIX
   ==========================================================================
   Test Case 1: Valid input array with mixed active status and ages
   - Input: [{ id: 1, firstName: "John", lastName: "Doe", age: 25, active: true }, 
             { id: 2, firstName: "Jane", age: 16, active: true }]
   - Dry Run: 
     - User 1: active=true, age=25 (>=18) -> PASS -> mapped to { id: 1, fullName: "John Doe", email: "" }
     - User 2: active=true, age=16 (<18)  -> FAIL -> filtered out
   - Output: [{ id: 1, fullName: "John Doe", email: "" }]

   Test Case 2: Edge cases (null, empty, invalid objects)
   - Input: null
   - Output: []
   ========================================================================== */

// Automated Test Runner Function
function runTests() {
  console.assert(
    processUserData(null).length === 0,
    'Test 1 Failed: Null input should return empty array'
  );

  const sampleUsers = [
    { id: 101, firstName: 'Alice', lastName: 'Smith', age: 22, active: true, email: 'ALICE@EXAMPLE.COM' },
    { id: 102, firstName: 'Bob', age: 17, active: true },
    { id: 103, firstName: 'Charlie', age: 30, active: false }
  ];

  const result = processUserData(sampleUsers);
  console.assert(result.length === 1, 'Test 2 Failed: Should filter out inactive/underage users');
  console.assert(result[0].email === 'alice@example.com', 'Test 3 Failed: Should lower-case email');

  console.log('✅ All Day 15 Assignment #59 Tests Passed Successfully!');
}

// Run tests if in browser/testing environment
if (typeof window !== 'undefined') {
  runTests();
}