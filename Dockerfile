# Build React.js app
FROM node:16-alpine AS build-react
WORKDIR /app/client

COPY ./Source/ClientApp/package*.json ./
RUN npm install

COPY ./Source/ClientApp/ .
RUN npm run build

# Build ASP.NET MVC
FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine AS build-mvc
WORKDIR /app

COPY . .
COPY --from=build-react /app/client/build ./Source/wwwroot

WORKDIR /app/Source

RUN dotnet publish -c Release -o /app/out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine as final
WORKDIR /app

COPY --from=build-mvc /app/out .

EXPOSE 80

ENTRYPOINT ["dotnet", "Projectwebapp.dll"]
