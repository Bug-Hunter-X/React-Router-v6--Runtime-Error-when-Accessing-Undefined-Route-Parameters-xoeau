# React Router v6: Handling Undefined Route Parameters

This repository demonstrates a common issue in React Router v6: runtime errors when accessing route parameters that are undefined.  The `undefinedParamBug.js` file shows how this error occurs, and `undefinedParamSolution.js` provides a solution to prevent it.

The problem arises because React Router v6 strictly enforces the use of the `useParams` hook.  Attempting to access parameters directly without this hook or without checking for undefined values leads to unexpected crashes.  This change in behavior from previous versions of React Router necessitates a more robust approach to handling potential missing parameters.

The solution involves using optional chaining or a nullish coalescing operator to safely access the parameters and provide fallback values in the case where the parameter isn't defined.  This ensures that the component renders gracefully even when a route parameter is missing.