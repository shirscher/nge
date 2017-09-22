docker run -d --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
 
npm set registry http://localhost:4873
npm adduser --registry=http://localhost:4873

echo ioc-core
cd ../lib/ioc-core
rm -rf ./node_modules
echo ...installing
npm i
echo ...building
tsc
echo ...publishing
npm publish

echo
echo ioc-inversify
cd ../ioc-inversify
rm -rf ./node_modules
echo ...installing
npm i
echo ...building
tsc
echo ...publishing
npm publish

echo
echo logging-core
cd ../logging-core
rm -rf ./node_modules
echo ...installing
npm i
echo ...building
tsc
echo ...publishing
npm publish

echo
echo api
cd ../../server/api
rm -rf ./node_modules
echo ...installing
npm i
echo ...publishing
npm publish

npm set registry https://registry.npmjs.org/
docker stop verdaccio

echo
echo done
read