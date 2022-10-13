import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={120}
      height={108}
      viewBox="0 0 120 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M120 54.38c0-7.949-9.955-15.483-25.218-20.154C98.304 18.669 96.739 6.292 89.84 2.33 88.251 1.4 86.392.96 84.362.96v5.455c1.125 0 2.03.22 2.788.636 3.327 1.908 4.77 9.172 3.645 18.516-.27 2.299-.71 4.72-1.248 7.191-4.794-1.174-10.028-2.08-15.531-2.666-3.303-4.525-6.727-8.634-10.176-12.23C71.814 10.45 79.3 6.39 84.386 6.39V.936c-6.726 0-15.531 4.794-24.435 13.11C51.048 5.78 42.242 1.034 35.516 1.034v5.454c5.063 0 12.572 4.036 20.546 11.398A115.515 115.515 0 0045.96 30.092c-5.528.587-10.762 1.492-15.556 2.69a73.771 73.771 0 01-1.272-7.093c-1.15-9.344.269-16.608 3.57-18.54.735-.44 1.689-.636 2.814-.636V1.058c-2.055 0-3.914.44-5.528 1.37-6.873 3.962-8.414 16.315-4.868 31.822C9.906 38.946 0 46.456 0 54.38c0 7.95 9.955 15.484 25.218 20.155-3.522 15.557-1.957 27.934 4.941 31.896 1.59.93 3.449 1.37 5.504 1.37 6.726 0 15.532-4.794 24.435-13.11 8.903 8.267 17.709 13.012 24.435 13.012 2.055 0 3.914-.44 5.528-1.37 6.873-3.962 8.414-16.314 4.868-31.822C110.094 69.839 120 62.306 120 54.38zM88.153 38.066c-.905 3.155-2.03 6.408-3.302 9.661a115.758 115.758 0 00-3.204-5.87c-1.125-1.957-2.324-3.865-3.522-5.724 3.473.514 6.824 1.15 10.028 1.933zm-11.202 26.05c-1.908 3.302-3.865 6.432-5.895 9.343-3.645.318-7.338.49-11.056.49-3.693 0-7.387-.172-11.007-.465a134.832 134.832 0 01-5.92-9.295 127.397 127.397 0 01-5.087-9.735 127.557 127.557 0 015.063-9.76c1.908-3.302 3.865-6.433 5.895-9.343A127.3 127.3 0 0160 34.86c3.693 0 7.387.172 11.007.465 2.03 2.911 4.011 6.017 5.92 9.295a127.416 127.416 0 015.087 9.735 136.956 136.956 0 01-5.063 9.76zm7.9-3.18a104.848 104.848 0 013.376 9.735c-3.205.782-6.58 1.443-10.078 1.956 1.199-1.883 2.397-3.815 3.522-5.796a138.939 138.939 0 003.18-5.895zM60.05 87.034c-2.275-2.348-4.55-4.965-6.8-7.827 2.201.098 4.452.172 6.726.172 2.3 0 4.574-.05 6.8-.172a95.488 95.488 0 01-6.726 7.827zM41.85 72.627c-3.474-.513-6.825-1.15-10.029-1.932.905-3.155 2.03-6.408 3.302-9.661a115.803 115.803 0 003.205 5.87 161.972 161.972 0 003.522 5.724zm18.076-50.9c2.274 2.348 4.55 4.965 6.8 7.827A151.478 151.478 0 0060 29.383c-2.3 0-4.574.048-6.8.17a95.468 95.468 0 016.727-7.826zm-18.1 14.406c-1.2 1.884-2.398 3.816-3.523 5.797a138.29 138.29 0 00-3.18 5.87 104.837 104.837 0 01-3.375-9.734c3.204-.759 6.58-1.419 10.077-1.933zM19.69 66.757C11.031 63.064 5.43 58.221 5.43 54.38c0-3.84 5.601-8.707 14.26-12.376 2.104-.905 4.403-1.712 6.776-2.47 1.394 4.794 3.228 9.783 5.503 14.895-2.25 5.088-4.06 10.053-5.43 14.823a74.322 74.322 0 01-6.849-2.495zm13.16 34.953c-3.327-1.908-4.77-9.172-3.645-18.516.27-2.299.71-4.72 1.248-7.191 4.794 1.174 10.028 2.08 15.531 2.666 3.303 4.525 6.727 8.634 10.176 12.23-7.974 7.411-15.459 11.472-20.546 11.472-1.101-.025-2.03-.245-2.764-.661zm58.018-18.638c1.15 9.343-.269 16.608-3.57 18.54-.735.441-1.689.636-2.814.636-5.063 0-12.572-4.035-20.546-11.398A115.537 115.537 0 0074.04 78.645c5.528-.587 10.762-1.492 15.556-2.69.563 2.47 1.003 4.842 1.272 7.117zm9.417-16.315c-2.103.905-4.402 1.712-6.775 2.47-1.394-4.794-3.229-9.783-5.504-14.895 2.25-5.088 4.06-10.053 5.43-14.823a77.62 77.62 0 016.874 2.495c8.659 3.693 14.26 8.536 14.26 12.377-.025 3.84-5.626 8.707-14.285 12.376z"
        fill="#81D8F7"
      />
    </svg>
  );
}
