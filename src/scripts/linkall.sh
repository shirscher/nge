npm cache clean

echo ioc-core
cd ../lib/ioc-core
rm -rf ./node_modules
echo ...installing
npm i
echo ...building
tsc
echo ...linking
npm link

echo
echo ioc-inversify
cd ../ioc-inversify
rm -rf ./node_modules
echo ...dependencies
npm link @nge/ioc-core
echo ...installing
npm i
echo ...building
tsc
echo ...deduping
npm dedupe
echo ...linking
npm link

# echo
# echo logging-core
# cd ../logging-core
# rm -rf ./node_modules
# echo ...installing
# npm i
# echo ...dependencies
# npm link @nge/ioc-core
# npm link @nge/ioc-inversify
# echo ...building
# tsc
# echo ...deduping
# npm dedupe
# echo ...linking
# npm link

# echo
# echo api
# cd ../../server/api
# rm -rf ./node_modules
# echo ...installing
# npm i
# echo ...dependencies
# npm link @nge/ioc-core
# npm link @nge/ioc-inversify
# npm link @nge/logging-core
# echo ...building
# tsc

# echo
# echo done