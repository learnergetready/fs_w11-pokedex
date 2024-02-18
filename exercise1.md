A Google search shows that C++ has at least two linters, that also perform ”static analysis” of ”programming errors”. The two options are cpp-linter and clang-tidy.

As for unit testing, there are aparently at least three good options: Catch, Boost.Test, and Google Test. There was also an advice on Reddit for embedded programmers to keep business logic pure code to have it unit testable.

The C++ code is aparently built in four steps. Preprocessing, compiling, assembling, and linking. A popular tool to handle this process is called g++.

For CI/CD in C++ you could also use Azure Pipelines or some Buddy.works. Both have also an on-premise option. Buddy.works says that their on-premise version is run in Docker, and that it can also host Git for the project.
When choosing between self-hosted and cloud-based CI/CD environment a major factor is the size of the team. When the project grows bigger, the cost of SaaS CI/CD goes up. Self-hosting carries a larger initial cost, but you won’t then be paying per user or per minute. Then again, for a really small hobby project the bother of having to maintain a server may be too much.

Scale is not the only thing you have to consider, though. The environments, platforms, tools, and languages, restrict the choice between CI/CD options. And if there are serious privacy concerns, self-hosting must be the choice.
