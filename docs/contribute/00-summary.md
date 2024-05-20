# Project Title: 


## Version control commit rules"
For this project, we will follow these commit rules for best practices:

1. **Understandable Message Format**: Commit messages should be written in a simple and understandable way. 

    `<type>: <description>`
   The `type` could be `feat` form a new feature, `fix` for a bug fix, `doc` for documentation, etc. `Description` is a brief of changes made.

2. **Semantic Commit Messages**: Use semantic commit messages to describe your changes.

   For Example:
   `feat: add new login feature`
   `fix: correct minor typos in code`
   `docs: change and adjust README file`
   `style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)`
   `refactor: A code change that neither fixes a bug nor adds a feature`
   `perf: A code change that improves performance`
   `test: Adding missing tests or correcting existing tests`
   `chore: Changes to the build process or auxiliary tools and libraries such as documentation generation`

3. **Imperative, Present Tense**: Use the present tense and the imperative mood ("change" not "changed" or "changes").

4. **No Long Commit**: It is advisable to avoid long commit comments; try to keep them concise and straight to the point. If required, provide additional context in the commit description.

5. **Issue Referencing**: If a commit addresses an issue, it should reference the issue number to maintain a connection between the code changes and recorded issues.

## Best Practices:
- Take regular pulls from the main branch to ensure your local copy is always up-to-date.
- Before pushing a commit, ensure that the code compiles, builds and passes all tests to avoid breaking the build.
- Include all relevant files in the commits. Avoid committing half-done work.
- Do not commit dependencies or library files. These should be handled using package managers.
- Maintain a `.gitignore` file to avoid committing unnecessary files.

Remember, well-formatted and standard commit messages show the professionalism, discipline, understanding and communication ability of a developer. Happy coding!