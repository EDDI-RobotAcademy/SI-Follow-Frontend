# Node.js LTS 버전 사용
FROM node:20

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

# Next.js가 기본적으로 3000번 포트에서 실행됨
EXPOSE 3000

# Next.js 앱 실행 (SSR 모드)
CMD ["npm", "start"]
