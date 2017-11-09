docker run -d --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
 
npm set registry http://localhost:4873
npm adduser --registry=http://localhost:4873

echo core
cd ../lib/core
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo ioc-core
cd ../ioc-core
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo
echo ioc-inversify
cd ../ioc-inversify
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo
echo config-core
cd ../config-core
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo
echo logging-core
cd ../logging-core
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo
echo db-core
cd ../db-core
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo db-sequelize
cd ../db-sequelize
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ..publishing
npm publish

echo
echo api-core
cd ../api-core
npm run clean
rpn ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo
echo api
cd ../../server/apis/default
npm run clean
rm ./package-lock.json
echo ...installing
npm i
echo ...building
npm run build

npm set registry https://registry.npmjs.org/
#docker stop verdaccio

echo
echo done
read