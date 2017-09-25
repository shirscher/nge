docker run -d --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
 
npm set registry http://localhost:4873
npm adduser --registry=http://localhost:4873

echo ioc-core
cd ../lib/ioc-core
npm run clean
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
echo ...installing
npm i
echo ...building
npm run build
echo ...publishing
npm publish

echo
echo api
cd ../../server/api
npm clean
echo ...installing
npm i
echo ...building
npm run build

npm set registry https://registry.npmjs.org/
docker stop verdaccio

echo
echo done
read