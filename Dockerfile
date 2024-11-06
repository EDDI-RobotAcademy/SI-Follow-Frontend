# 1. Build stage (멀티스테이지 빌드 사용)
FROM node:20-alpine AS builder

# 앱 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# Next.js 앱 빌드
RUN npm run build

# 2. Production stage (최종 이미지 생성)
FROM node:20-alpine

# 앱 디렉토리 설정
WORKDIR /app

# 빌드된 파일들을 복사
COPY --from=builder /app ./

# Next.js가 기본적으로 3000번 포트에서 실행됨
EXPOSE 3000

# Next.js 앱 실행 (SSR 모드)
CMD ["npm", "start"]
